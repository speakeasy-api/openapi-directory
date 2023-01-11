package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCreateTransitGatewayRouteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetCreateTransitGatewayRouteActionEnum action;
    public GetCreateTransitGatewayRouteQueryParams withAction(GetCreateTransitGatewayRouteActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Blackhole")
    public Boolean blackhole;
    public GetCreateTransitGatewayRouteQueryParams withBlackhole(Boolean blackhole) {
        this.blackhole = blackhole;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DestinationCidrBlock")
    public String destinationCidrBlock;
    public GetCreateTransitGatewayRouteQueryParams withDestinationCidrBlock(String destinationCidrBlock) {
        this.destinationCidrBlock = destinationCidrBlock;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetCreateTransitGatewayRouteQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TransitGatewayAttachmentId")
    public String transitGatewayAttachmentId;
    public GetCreateTransitGatewayRouteQueryParams withTransitGatewayAttachmentId(String transitGatewayAttachmentId) {
        this.transitGatewayAttachmentId = transitGatewayAttachmentId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TransitGatewayRouteTableId")
    public String transitGatewayRouteTableId;
    public GetCreateTransitGatewayRouteQueryParams withTransitGatewayRouteTableId(String transitGatewayRouteTableId) {
        this.transitGatewayRouteTableId = transitGatewayRouteTableId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetCreateTransitGatewayRouteVersionEnum version;
    public GetCreateTransitGatewayRouteQueryParams withVersion(GetCreateTransitGatewayRouteVersionEnum version) {
        this.version = version;
        return this;
    }
}