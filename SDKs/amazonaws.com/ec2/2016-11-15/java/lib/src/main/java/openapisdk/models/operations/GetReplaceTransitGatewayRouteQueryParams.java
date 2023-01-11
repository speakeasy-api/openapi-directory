package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetReplaceTransitGatewayRouteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetReplaceTransitGatewayRouteActionEnum action;
    public GetReplaceTransitGatewayRouteQueryParams withAction(GetReplaceTransitGatewayRouteActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Blackhole")
    public Boolean blackhole;
    public GetReplaceTransitGatewayRouteQueryParams withBlackhole(Boolean blackhole) {
        this.blackhole = blackhole;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DestinationCidrBlock")
    public String destinationCidrBlock;
    public GetReplaceTransitGatewayRouteQueryParams withDestinationCidrBlock(String destinationCidrBlock) {
        this.destinationCidrBlock = destinationCidrBlock;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetReplaceTransitGatewayRouteQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TransitGatewayAttachmentId")
    public String transitGatewayAttachmentId;
    public GetReplaceTransitGatewayRouteQueryParams withTransitGatewayAttachmentId(String transitGatewayAttachmentId) {
        this.transitGatewayAttachmentId = transitGatewayAttachmentId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TransitGatewayRouteTableId")
    public String transitGatewayRouteTableId;
    public GetReplaceTransitGatewayRouteQueryParams withTransitGatewayRouteTableId(String transitGatewayRouteTableId) {
        this.transitGatewayRouteTableId = transitGatewayRouteTableId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetReplaceTransitGatewayRouteVersionEnum version;
    public GetReplaceTransitGatewayRouteQueryParams withVersion(GetReplaceTransitGatewayRouteVersionEnum version) {
        this.version = version;
        return this;
    }
}