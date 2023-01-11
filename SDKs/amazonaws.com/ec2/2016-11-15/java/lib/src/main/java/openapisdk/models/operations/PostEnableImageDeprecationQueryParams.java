package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostEnableImageDeprecationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostEnableImageDeprecationActionEnum action;
    public PostEnableImageDeprecationQueryParams withAction(PostEnableImageDeprecationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostEnableImageDeprecationVersionEnum version;
    public PostEnableImageDeprecationQueryParams withVersion(PostEnableImageDeprecationVersionEnum version) {
        this.version = version;
        return this;
    }
}