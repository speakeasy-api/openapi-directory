package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCancelInstanceRefreshQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCancelInstanceRefreshActionEnum action;
    public PostCancelInstanceRefreshQueryParams withAction(PostCancelInstanceRefreshActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCancelInstanceRefreshVersionEnum version;
    public PostCancelInstanceRefreshQueryParams withVersion(PostCancelInstanceRefreshVersionEnum version) {
        this.version = version;
        return this;
    }
}