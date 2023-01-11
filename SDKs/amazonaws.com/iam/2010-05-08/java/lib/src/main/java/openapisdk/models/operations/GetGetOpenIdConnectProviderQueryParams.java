package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetOpenIdConnectProviderQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetGetOpenIdConnectProviderActionEnum action;
    public GetGetOpenIdConnectProviderQueryParams withAction(GetGetOpenIdConnectProviderActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=OpenIDConnectProviderArn")
    public String openIDConnectProviderArn;
    public GetGetOpenIdConnectProviderQueryParams withOpenIdConnectProviderArn(String openIDConnectProviderArn) {
        this.openIDConnectProviderArn = openIDConnectProviderArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetGetOpenIdConnectProviderVersionEnum version;
    public GetGetOpenIdConnectProviderQueryParams withVersion(GetGetOpenIdConnectProviderVersionEnum version) {
        this.version = version;
        return this;
    }
}