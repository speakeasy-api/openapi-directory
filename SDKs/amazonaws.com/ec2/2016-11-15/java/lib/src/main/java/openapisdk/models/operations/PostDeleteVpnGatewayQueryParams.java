package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteVpnGatewayQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteVpnGatewayActionEnum action;
    public PostDeleteVpnGatewayQueryParams withAction(PostDeleteVpnGatewayActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteVpnGatewayVersionEnum version;
    public PostDeleteVpnGatewayQueryParams withVersion(PostDeleteVpnGatewayVersionEnum version) {
        this.version = version;
        return this;
    }
}