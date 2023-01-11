package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteOpenIdConnectProviderQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteOpenIdConnectProviderActionEnum action;
    public PostDeleteOpenIdConnectProviderQueryParams withAction(PostDeleteOpenIdConnectProviderActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteOpenIdConnectProviderVersionEnum version;
    public PostDeleteOpenIdConnectProviderQueryParams withVersion(PostDeleteOpenIdConnectProviderVersionEnum version) {
        this.version = version;
        return this;
    }
}