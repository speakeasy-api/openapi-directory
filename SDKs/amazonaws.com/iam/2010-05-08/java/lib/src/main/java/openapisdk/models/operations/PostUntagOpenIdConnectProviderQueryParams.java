package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUntagOpenIdConnectProviderQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostUntagOpenIdConnectProviderActionEnum action;
    public PostUntagOpenIdConnectProviderQueryParams withAction(PostUntagOpenIdConnectProviderActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostUntagOpenIdConnectProviderVersionEnum version;
    public PostUntagOpenIdConnectProviderQueryParams withVersion(PostUntagOpenIdConnectProviderVersionEnum version) {
        this.version = version;
        return this;
    }
}