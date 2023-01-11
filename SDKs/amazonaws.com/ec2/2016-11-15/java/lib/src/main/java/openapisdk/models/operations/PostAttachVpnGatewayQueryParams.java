package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAttachVpnGatewayQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostAttachVpnGatewayActionEnum action;
    public PostAttachVpnGatewayQueryParams withAction(PostAttachVpnGatewayActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostAttachVpnGatewayVersionEnum version;
    public PostAttachVpnGatewayQueryParams withVersion(PostAttachVpnGatewayVersionEnum version) {
        this.version = version;
        return this;
    }
}