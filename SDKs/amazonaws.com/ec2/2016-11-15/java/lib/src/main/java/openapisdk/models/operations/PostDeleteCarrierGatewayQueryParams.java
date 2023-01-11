package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteCarrierGatewayQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteCarrierGatewayActionEnum action;
    public PostDeleteCarrierGatewayQueryParams withAction(PostDeleteCarrierGatewayActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteCarrierGatewayVersionEnum version;
    public PostDeleteCarrierGatewayQueryParams withVersion(PostDeleteCarrierGatewayVersionEnum version) {
        this.version = version;
        return this;
    }
}