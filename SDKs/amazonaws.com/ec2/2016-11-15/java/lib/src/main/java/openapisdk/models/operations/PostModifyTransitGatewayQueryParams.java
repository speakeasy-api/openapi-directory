package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyTransitGatewayQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyTransitGatewayActionEnum action;
    public PostModifyTransitGatewayQueryParams withAction(PostModifyTransitGatewayActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyTransitGatewayVersionEnum version;
    public PostModifyTransitGatewayQueryParams withVersion(PostModifyTransitGatewayVersionEnum version) {
        this.version = version;
        return this;
    }
}