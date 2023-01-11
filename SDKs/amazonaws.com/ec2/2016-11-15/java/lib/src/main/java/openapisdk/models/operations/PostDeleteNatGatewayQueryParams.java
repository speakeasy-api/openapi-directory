package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteNatGatewayQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteNatGatewayActionEnum action;
    public PostDeleteNatGatewayQueryParams withAction(PostDeleteNatGatewayActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteNatGatewayVersionEnum version;
    public PostDeleteNatGatewayQueryParams withVersion(PostDeleteNatGatewayVersionEnum version) {
        this.version = version;
        return this;
    }
}