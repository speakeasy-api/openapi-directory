package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetOpenIdConnectProviderQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetOpenIdConnectProviderActionEnum action;
    public PostGetOpenIdConnectProviderQueryParams withAction(PostGetOpenIdConnectProviderActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetOpenIdConnectProviderVersionEnum version;
    public PostGetOpenIdConnectProviderQueryParams withVersion(PostGetOpenIdConnectProviderVersionEnum version) {
        this.version = version;
        return this;
    }
}