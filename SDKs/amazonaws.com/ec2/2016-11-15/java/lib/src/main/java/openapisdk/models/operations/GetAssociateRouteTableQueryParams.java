package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAssociateRouteTableQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetAssociateRouteTableActionEnum action;
    public GetAssociateRouteTableQueryParams withAction(GetAssociateRouteTableActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetAssociateRouteTableQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=GatewayId")
    public String gatewayId;
    public GetAssociateRouteTableQueryParams withGatewayId(String gatewayId) {
        this.gatewayId = gatewayId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RouteTableId")
    public String routeTableId;
    public GetAssociateRouteTableQueryParams withRouteTableId(String routeTableId) {
        this.routeTableId = routeTableId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SubnetId")
    public String subnetId;
    public GetAssociateRouteTableQueryParams withSubnetId(String subnetId) {
        this.subnetId = subnetId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetAssociateRouteTableVersionEnum version;
    public GetAssociateRouteTableQueryParams withVersion(GetAssociateRouteTableVersionEnum version) {
        this.version = version;
        return this;
    }
}