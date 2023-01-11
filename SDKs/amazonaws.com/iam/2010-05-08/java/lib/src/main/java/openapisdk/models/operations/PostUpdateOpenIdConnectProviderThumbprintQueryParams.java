package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateOpenIdConnectProviderThumbprintQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostUpdateOpenIdConnectProviderThumbprintActionEnum action;
    public PostUpdateOpenIdConnectProviderThumbprintQueryParams withAction(PostUpdateOpenIdConnectProviderThumbprintActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostUpdateOpenIdConnectProviderThumbprintVersionEnum version;
    public PostUpdateOpenIdConnectProviderThumbprintQueryParams withVersion(PostUpdateOpenIdConnectProviderThumbprintVersionEnum version) {
        this.version = version;
        return this;
    }
}