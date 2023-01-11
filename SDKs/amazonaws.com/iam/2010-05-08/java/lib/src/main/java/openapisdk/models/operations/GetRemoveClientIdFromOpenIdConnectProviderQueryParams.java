package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRemoveClientIdFromOpenIdConnectProviderQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetRemoveClientIdFromOpenIdConnectProviderActionEnum action;
    public GetRemoveClientIdFromOpenIdConnectProviderQueryParams withAction(GetRemoveClientIdFromOpenIdConnectProviderActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ClientID")
    public String clientID;
    public GetRemoveClientIdFromOpenIdConnectProviderQueryParams withClientId(String clientID) {
        this.clientID = clientID;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=OpenIDConnectProviderArn")
    public String openIDConnectProviderArn;
    public GetRemoveClientIdFromOpenIdConnectProviderQueryParams withOpenIdConnectProviderArn(String openIDConnectProviderArn) {
        this.openIDConnectProviderArn = openIDConnectProviderArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetRemoveClientIdFromOpenIdConnectProviderVersionEnum version;
    public GetRemoveClientIdFromOpenIdConnectProviderQueryParams withVersion(GetRemoveClientIdFromOpenIdConnectProviderVersionEnum version) {
        this.version = version;
        return this;
    }
}