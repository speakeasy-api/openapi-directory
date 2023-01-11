package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCreateRouteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetCreateRouteActionEnum action;
    public GetCreateRouteQueryParams withAction(GetCreateRouteActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CarrierGatewayId")
    public String carrierGatewayId;
    public GetCreateRouteQueryParams withCarrierGatewayId(String carrierGatewayId) {
        this.carrierGatewayId = carrierGatewayId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DestinationCidrBlock")
    public String destinationCidrBlock;
    public GetCreateRouteQueryParams withDestinationCidrBlock(String destinationCidrBlock) {
        this.destinationCidrBlock = destinationCidrBlock;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DestinationIpv6CidrBlock")
    public String destinationIpv6CidrBlock;
    public GetCreateRouteQueryParams withDestinationIpv6CidrBlock(String destinationIpv6CidrBlock) {
        this.destinationIpv6CidrBlock = destinationIpv6CidrBlock;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DestinationPrefixListId")
    public String destinationPrefixListId;
    public GetCreateRouteQueryParams withDestinationPrefixListId(String destinationPrefixListId) {
        this.destinationPrefixListId = destinationPrefixListId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetCreateRouteQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EgressOnlyInternetGatewayId")
    public String egressOnlyInternetGatewayId;
    public GetCreateRouteQueryParams withEgressOnlyInternetGatewayId(String egressOnlyInternetGatewayId) {
        this.egressOnlyInternetGatewayId = egressOnlyInternetGatewayId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=GatewayId")
    public String gatewayId;
    public GetCreateRouteQueryParams withGatewayId(String gatewayId) {
        this.gatewayId = gatewayId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=InstanceId")
    public String instanceId;
    public GetCreateRouteQueryParams withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=LocalGatewayId")
    public String localGatewayId;
    public GetCreateRouteQueryParams withLocalGatewayId(String localGatewayId) {
        this.localGatewayId = localGatewayId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NatGatewayId")
    public String natGatewayId;
    public GetCreateRouteQueryParams withNatGatewayId(String natGatewayId) {
        this.natGatewayId = natGatewayId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NetworkInterfaceId")
    public String networkInterfaceId;
    public GetCreateRouteQueryParams withNetworkInterfaceId(String networkInterfaceId) {
        this.networkInterfaceId = networkInterfaceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RouteTableId")
    public String routeTableId;
    public GetCreateRouteQueryParams withRouteTableId(String routeTableId) {
        this.routeTableId = routeTableId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TransitGatewayId")
    public String transitGatewayId;
    public GetCreateRouteQueryParams withTransitGatewayId(String transitGatewayId) {
        this.transitGatewayId = transitGatewayId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetCreateRouteVersionEnum version;
    public GetCreateRouteQueryParams withVersion(GetCreateRouteVersionEnum version) {
        this.version = version;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=VpcEndpointId")
    public String vpcEndpointId;
    public GetCreateRouteQueryParams withVpcEndpointId(String vpcEndpointId) {
        this.vpcEndpointId = vpcEndpointId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=VpcPeeringConnectionId")
    public String vpcPeeringConnectionId;
    public GetCreateRouteQueryParams withVpcPeeringConnectionId(String vpcPeeringConnectionId) {
        this.vpcPeeringConnectionId = vpcPeeringConnectionId;
        return this;
    }
}