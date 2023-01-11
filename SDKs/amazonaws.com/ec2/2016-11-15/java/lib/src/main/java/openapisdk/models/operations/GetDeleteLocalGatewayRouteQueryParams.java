package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteLocalGatewayRouteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteLocalGatewayRouteActionEnum action;
    public GetDeleteLocalGatewayRouteQueryParams withAction(GetDeleteLocalGatewayRouteActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DestinationCidrBlock")
    public String destinationCidrBlock;
    public GetDeleteLocalGatewayRouteQueryParams withDestinationCidrBlock(String destinationCidrBlock) {
        this.destinationCidrBlock = destinationCidrBlock;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetDeleteLocalGatewayRouteQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=LocalGatewayRouteTableId")
    public String localGatewayRouteTableId;
    public GetDeleteLocalGatewayRouteQueryParams withLocalGatewayRouteTableId(String localGatewayRouteTableId) {
        this.localGatewayRouteTableId = localGatewayRouteTableId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteLocalGatewayRouteVersionEnum version;
    public GetDeleteLocalGatewayRouteQueryParams withVersion(GetDeleteLocalGatewayRouteVersionEnum version) {
        this.version = version;
        return this;
    }
}