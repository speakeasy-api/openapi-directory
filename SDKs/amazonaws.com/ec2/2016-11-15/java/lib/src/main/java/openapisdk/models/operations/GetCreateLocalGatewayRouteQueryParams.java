package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCreateLocalGatewayRouteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetCreateLocalGatewayRouteActionEnum action;
    public GetCreateLocalGatewayRouteQueryParams withAction(GetCreateLocalGatewayRouteActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DestinationCidrBlock")
    public String destinationCidrBlock;
    public GetCreateLocalGatewayRouteQueryParams withDestinationCidrBlock(String destinationCidrBlock) {
        this.destinationCidrBlock = destinationCidrBlock;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetCreateLocalGatewayRouteQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=LocalGatewayRouteTableId")
    public String localGatewayRouteTableId;
    public GetCreateLocalGatewayRouteQueryParams withLocalGatewayRouteTableId(String localGatewayRouteTableId) {
        this.localGatewayRouteTableId = localGatewayRouteTableId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=LocalGatewayVirtualInterfaceGroupId")
    public String localGatewayVirtualInterfaceGroupId;
    public GetCreateLocalGatewayRouteQueryParams withLocalGatewayVirtualInterfaceGroupId(String localGatewayVirtualInterfaceGroupId) {
        this.localGatewayVirtualInterfaceGroupId = localGatewayVirtualInterfaceGroupId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetCreateLocalGatewayRouteVersionEnum version;
    public GetCreateLocalGatewayRouteQueryParams withVersion(GetCreateLocalGatewayRouteVersionEnum version) {
        this.version = version;
        return this;
    }
}