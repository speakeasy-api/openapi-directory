package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListOpenIdConnectProvidersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetListOpenIdConnectProvidersActionEnum action;
    public GetListOpenIdConnectProvidersQueryParams withAction(GetListOpenIdConnectProvidersActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetListOpenIdConnectProvidersVersionEnum version;
    public GetListOpenIdConnectProvidersQueryParams withVersion(GetListOpenIdConnectProvidersVersionEnum version) {
        this.version = version;
        return this;
    }
}