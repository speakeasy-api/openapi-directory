package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetReplaceRouteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetReplaceRouteActionEnum action;
    public GetReplaceRouteQueryParams withAction(GetReplaceRouteActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CarrierGatewayId")
    public String carrierGatewayId;
    public GetReplaceRouteQueryParams withCarrierGatewayId(String carrierGatewayId) {
        this.carrierGatewayId = carrierGatewayId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DestinationCidrBlock")
    public String destinationCidrBlock;
    public GetReplaceRouteQueryParams withDestinationCidrBlock(String destinationCidrBlock) {
        this.destinationCidrBlock = destinationCidrBlock;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DestinationIpv6CidrBlock")
    public String destinationIpv6CidrBlock;
    public GetReplaceRouteQueryParams withDestinationIpv6CidrBlock(String destinationIpv6CidrBlock) {
        this.destinationIpv6CidrBlock = destinationIpv6CidrBlock;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DestinationPrefixListId")
    public String destinationPrefixListId;
    public GetReplaceRouteQueryParams withDestinationPrefixListId(String destinationPrefixListId) {
        this.destinationPrefixListId = destinationPrefixListId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetReplaceRouteQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EgressOnlyInternetGatewayId")
    public String egressOnlyInternetGatewayId;
    public GetReplaceRouteQueryParams withEgressOnlyInternetGatewayId(String egressOnlyInternetGatewayId) {
        this.egressOnlyInternetGatewayId = egressOnlyInternetGatewayId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=GatewayId")
    public String gatewayId;
    public GetReplaceRouteQueryParams withGatewayId(String gatewayId) {
        this.gatewayId = gatewayId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=InstanceId")
    public String instanceId;
    public GetReplaceRouteQueryParams withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=LocalGatewayId")
    public String localGatewayId;
    public GetReplaceRouteQueryParams withLocalGatewayId(String localGatewayId) {
        this.localGatewayId = localGatewayId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=LocalTarget")
    public Boolean localTarget;
    public GetReplaceRouteQueryParams withLocalTarget(Boolean localTarget) {
        this.localTarget = localTarget;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NatGatewayId")
    public String natGatewayId;
    public GetReplaceRouteQueryParams withNatGatewayId(String natGatewayId) {
        this.natGatewayId = natGatewayId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NetworkInterfaceId")
    public String networkInterfaceId;
    public GetReplaceRouteQueryParams withNetworkInterfaceId(String networkInterfaceId) {
        this.networkInterfaceId = networkInterfaceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RouteTableId")
    public String routeTableId;
    public GetReplaceRouteQueryParams withRouteTableId(String routeTableId) {
        this.routeTableId = routeTableId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TransitGatewayId")
    public String transitGatewayId;
    public GetReplaceRouteQueryParams withTransitGatewayId(String transitGatewayId) {
        this.transitGatewayId = transitGatewayId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetReplaceRouteVersionEnum version;
    public GetReplaceRouteQueryParams withVersion(GetReplaceRouteVersionEnum version) {
        this.version = version;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=VpcEndpointId")
    public String vpcEndpointId;
    public GetReplaceRouteQueryParams withVpcEndpointId(String vpcEndpointId) {
        this.vpcEndpointId = vpcEndpointId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=VpcPeeringConnectionId")
    public String vpcPeeringConnectionId;
    public GetReplaceRouteQueryParams withVpcPeeringConnectionId(String vpcPeeringConnectionId) {
        this.vpcPeeringConnectionId = vpcPeeringConnectionId;
        return this;
    }
}