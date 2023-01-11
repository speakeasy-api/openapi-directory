package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAddClientIdToOpenIdConnectProviderQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetAddClientIdToOpenIdConnectProviderActionEnum action;
    public GetAddClientIdToOpenIdConnectProviderQueryParams withAction(GetAddClientIdToOpenIdConnectProviderActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ClientID")
    public String clientID;
    public GetAddClientIdToOpenIdConnectProviderQueryParams withClientId(String clientID) {
        this.clientID = clientID;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=OpenIDConnectProviderArn")
    public String openIDConnectProviderArn;
    public GetAddClientIdToOpenIdConnectProviderQueryParams withOpenIdConnectProviderArn(String openIDConnectProviderArn) {
        this.openIDConnectProviderArn = openIDConnectProviderArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetAddClientIdToOpenIdConnectProviderVersionEnum version;
    public GetAddClientIdToOpenIdConnectProviderQueryParams withVersion(GetAddClientIdToOpenIdConnectProviderVersionEnum version) {
        this.version = version;
        return this;
    }
}