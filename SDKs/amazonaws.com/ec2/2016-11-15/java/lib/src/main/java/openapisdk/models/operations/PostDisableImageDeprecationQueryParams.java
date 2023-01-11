package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDisableImageDeprecationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDisableImageDeprecationActionEnum action;
    public PostDisableImageDeprecationQueryParams withAction(PostDisableImageDeprecationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDisableImageDeprecationVersionEnum version;
    public PostDisableImageDeprecationQueryParams withVersion(PostDisableImageDeprecationVersionEnum version) {
        this.version = version;
        return this;
    }
}