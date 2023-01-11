package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateCarrierGatewayQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateCarrierGatewayActionEnum action;
    public PostCreateCarrierGatewayQueryParams withAction(PostCreateCarrierGatewayActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateCarrierGatewayVersionEnum version;
    public PostCreateCarrierGatewayQueryParams withVersion(PostCreateCarrierGatewayVersionEnum version) {
        this.version = version;
        return this;
    }
}