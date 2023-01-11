package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAddClientIdToOpenIdConnectProviderQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostAddClientIdToOpenIdConnectProviderActionEnum action;
    public PostAddClientIdToOpenIdConnectProviderQueryParams withAction(PostAddClientIdToOpenIdConnectProviderActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostAddClientIdToOpenIdConnectProviderVersionEnum version;
    public PostAddClientIdToOpenIdConnectProviderQueryParams withVersion(PostAddClientIdToOpenIdConnectProviderVersionEnum version) {
        this.version = version;
        return this;
    }
}