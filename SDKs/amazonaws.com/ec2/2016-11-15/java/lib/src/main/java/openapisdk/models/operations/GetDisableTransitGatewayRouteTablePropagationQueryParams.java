package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDisableTransitGatewayRouteTablePropagationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDisableTransitGatewayRouteTablePropagationActionEnum action;
    public GetDisableTransitGatewayRouteTablePropagationQueryParams withAction(GetDisableTransitGatewayRouteTablePropagationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetDisableTransitGatewayRouteTablePropagationQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TransitGatewayAttachmentId")
    public String transitGatewayAttachmentId;
    public GetDisableTransitGatewayRouteTablePropagationQueryParams withTransitGatewayAttachmentId(String transitGatewayAttachmentId) {
        this.transitGatewayAttachmentId = transitGatewayAttachmentId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TransitGatewayRouteTableId")
    public String transitGatewayRouteTableId;
    public GetDisableTransitGatewayRouteTablePropagationQueryParams withTransitGatewayRouteTableId(String transitGatewayRouteTableId) {
        this.transitGatewayRouteTableId = transitGatewayRouteTableId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDisableTransitGatewayRouteTablePropagationVersionEnum version;
    public GetDisableTransitGatewayRouteTablePropagationQueryParams withVersion(GetDisableTransitGatewayRouteTablePropagationVersionEnum version) {
        this.version = version;
        return this;
    }
}