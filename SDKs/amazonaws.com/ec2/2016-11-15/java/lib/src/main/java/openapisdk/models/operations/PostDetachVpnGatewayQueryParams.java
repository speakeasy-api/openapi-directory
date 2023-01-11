package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDetachVpnGatewayQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDetachVpnGatewayActionEnum action;
    public PostDetachVpnGatewayQueryParams withAction(PostDetachVpnGatewayActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDetachVpnGatewayVersionEnum version;
    public PostDetachVpnGatewayQueryParams withVersion(PostDetachVpnGatewayVersionEnum version) {
        this.version = version;
        return this;
    }
}