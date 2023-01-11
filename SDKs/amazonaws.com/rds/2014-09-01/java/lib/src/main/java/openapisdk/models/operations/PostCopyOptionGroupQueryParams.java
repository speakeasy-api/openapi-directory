package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCopyOptionGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCopyOptionGroupActionEnum action;
    public PostCopyOptionGroupQueryParams withAction(PostCopyOptionGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCopyOptionGroupVersionEnum version;
    public PostCopyOptionGroupQueryParams withVersion(PostCopyOptionGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}