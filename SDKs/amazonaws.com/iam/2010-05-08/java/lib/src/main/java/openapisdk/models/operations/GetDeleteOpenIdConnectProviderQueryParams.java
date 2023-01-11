package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteOpenIdConnectProviderQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteOpenIdConnectProviderActionEnum action;
    public GetDeleteOpenIdConnectProviderQueryParams withAction(GetDeleteOpenIdConnectProviderActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=OpenIDConnectProviderArn")
    public String openIDConnectProviderArn;
    public GetDeleteOpenIdConnectProviderQueryParams withOpenIdConnectProviderArn(String openIDConnectProviderArn) {
        this.openIDConnectProviderArn = openIDConnectProviderArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteOpenIdConnectProviderVersionEnum version;
    public GetDeleteOpenIdConnectProviderQueryParams withVersion(GetDeleteOpenIdConnectProviderVersionEnum version) {
        this.version = version;
        return this;
    }
}