package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEnableTransitGatewayRouteTablePropagationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetEnableTransitGatewayRouteTablePropagationActionEnum action;
    public GetEnableTransitGatewayRouteTablePropagationQueryParams withAction(GetEnableTransitGatewayRouteTablePropagationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetEnableTransitGatewayRouteTablePropagationQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TransitGatewayAttachmentId")
    public String transitGatewayAttachmentId;
    public GetEnableTransitGatewayRouteTablePropagationQueryParams withTransitGatewayAttachmentId(String transitGatewayAttachmentId) {
        this.transitGatewayAttachmentId = transitGatewayAttachmentId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TransitGatewayRouteTableId")
    public String transitGatewayRouteTableId;
    public GetEnableTransitGatewayRouteTablePropagationQueryParams withTransitGatewayRouteTableId(String transitGatewayRouteTableId) {
        this.transitGatewayRouteTableId = transitGatewayRouteTableId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetEnableTransitGatewayRouteTablePropagationVersionEnum version;
    public GetEnableTransitGatewayRouteTablePropagationQueryParams withVersion(GetEnableTransitGatewayRouteTablePropagationVersionEnum version) {
        this.version = version;
        return this;
    }
}