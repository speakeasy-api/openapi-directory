package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUntagOpenIdConnectProviderQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetUntagOpenIdConnectProviderActionEnum action;
    public GetUntagOpenIdConnectProviderQueryParams withAction(GetUntagOpenIdConnectProviderActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=OpenIDConnectProviderArn")
    public String openIDConnectProviderArn;
    public GetUntagOpenIdConnectProviderQueryParams withOpenIdConnectProviderArn(String openIDConnectProviderArn) {
        this.openIDConnectProviderArn = openIDConnectProviderArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TagKeys")
    public String[] tagKeys;
    public GetUntagOpenIdConnectProviderQueryParams withTagKeys(String[] tagKeys) {
        this.tagKeys = tagKeys;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetUntagOpenIdConnectProviderVersionEnum version;
    public GetUntagOpenIdConnectProviderQueryParams withVersion(GetUntagOpenIdConnectProviderVersionEnum version) {
        this.version = version;
        return this;
    }
}