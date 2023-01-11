package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostStartInstanceRefreshQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostStartInstanceRefreshActionEnum action;
    public PostStartInstanceRefreshQueryParams withAction(PostStartInstanceRefreshActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostStartInstanceRefreshVersionEnum version;
    public PostStartInstanceRefreshQueryParams withVersion(PostStartInstanceRefreshVersionEnum version) {
        this.version = version;
        return this;
    }
}