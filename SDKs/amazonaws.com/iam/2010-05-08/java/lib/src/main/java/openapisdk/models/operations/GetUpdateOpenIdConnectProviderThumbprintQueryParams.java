package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUpdateOpenIdConnectProviderThumbprintQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetUpdateOpenIdConnectProviderThumbprintActionEnum action;
    public GetUpdateOpenIdConnectProviderThumbprintQueryParams withAction(GetUpdateOpenIdConnectProviderThumbprintActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=OpenIDConnectProviderArn")
    public String openIDConnectProviderArn;
    public GetUpdateOpenIdConnectProviderThumbprintQueryParams withOpenIdConnectProviderArn(String openIDConnectProviderArn) {
        this.openIDConnectProviderArn = openIDConnectProviderArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ThumbprintList")
    public String[] thumbprintList;
    public GetUpdateOpenIdConnectProviderThumbprintQueryParams withThumbprintList(String[] thumbprintList) {
        this.thumbprintList = thumbprintList;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetUpdateOpenIdConnectProviderThumbprintVersionEnum version;
    public GetUpdateOpenIdConnectProviderThumbprintQueryParams withVersion(GetUpdateOpenIdConnectProviderThumbprintVersionEnum version) {
        this.version = version;
        return this;
    }
}