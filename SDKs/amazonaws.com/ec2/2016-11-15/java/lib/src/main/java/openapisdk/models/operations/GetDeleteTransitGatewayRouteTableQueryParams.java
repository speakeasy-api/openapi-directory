package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteTransitGatewayRouteTableQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteTransitGatewayRouteTableActionEnum action;
    public GetDeleteTransitGatewayRouteTableQueryParams withAction(GetDeleteTransitGatewayRouteTableActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetDeleteTransitGatewayRouteTableQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TransitGatewayRouteTableId")
    public String transitGatewayRouteTableId;
    public GetDeleteTransitGatewayRouteTableQueryParams withTransitGatewayRouteTableId(String transitGatewayRouteTableId) {
        this.transitGatewayRouteTableId = transitGatewayRouteTableId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteTransitGatewayRouteTableVersionEnum version;
    public GetDeleteTransitGatewayRouteTableQueryParams withVersion(GetDeleteTransitGatewayRouteTableVersionEnum version) {
        this.version = version;
        return this;
    }
}