package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateTransitGatewayQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateTransitGatewayActionEnum action;
    public PostCreateTransitGatewayQueryParams withAction(PostCreateTransitGatewayActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateTransitGatewayVersionEnum version;
    public PostCreateTransitGatewayQueryParams withVersion(PostCreateTransitGatewayVersionEnum version) {
        this.version = version;
        return this;
    }
}