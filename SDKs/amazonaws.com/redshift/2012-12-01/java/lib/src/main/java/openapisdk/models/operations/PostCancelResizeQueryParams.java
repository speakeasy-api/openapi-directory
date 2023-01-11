package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCancelResizeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCancelResizeActionEnum action;
    public PostCancelResizeQueryParams withAction(PostCancelResizeActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCancelResizeVersionEnum version;
    public PostCancelResizeQueryParams withVersion(PostCancelResizeVersionEnum version) {
        this.version = version;
        return this;
    }
}