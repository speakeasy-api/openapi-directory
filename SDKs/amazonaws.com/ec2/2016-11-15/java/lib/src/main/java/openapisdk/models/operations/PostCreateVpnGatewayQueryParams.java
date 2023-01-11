package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateVpnGatewayQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateVpnGatewayActionEnum action;
    public PostCreateVpnGatewayQueryParams withAction(PostCreateVpnGatewayActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateVpnGatewayVersionEnum version;
    public PostCreateVpnGatewayQueryParams withVersion(PostCreateVpnGatewayVersionEnum version) {
        this.version = version;
        return this;
    }
}