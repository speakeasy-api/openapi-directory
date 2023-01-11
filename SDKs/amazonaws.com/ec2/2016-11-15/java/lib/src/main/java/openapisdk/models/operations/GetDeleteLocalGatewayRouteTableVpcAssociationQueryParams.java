package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteLocalGatewayRouteTableVpcAssociationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteLocalGatewayRouteTableVpcAssociationActionEnum action;
    public GetDeleteLocalGatewayRouteTableVpcAssociationQueryParams withAction(GetDeleteLocalGatewayRouteTableVpcAssociationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetDeleteLocalGatewayRouteTableVpcAssociationQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=LocalGatewayRouteTableVpcAssociationId")
    public String localGatewayRouteTableVpcAssociationId;
    public GetDeleteLocalGatewayRouteTableVpcAssociationQueryParams withLocalGatewayRouteTableVpcAssociationId(String localGatewayRouteTableVpcAssociationId) {
        this.localGatewayRouteTableVpcAssociationId = localGatewayRouteTableVpcAssociationId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteLocalGatewayRouteTableVpcAssociationVersionEnum version;
    public GetDeleteLocalGatewayRouteTableVpcAssociationQueryParams withVersion(GetDeleteLocalGatewayRouteTableVpcAssociationVersionEnum version) {
        this.version = version;
        return this;
    }
}