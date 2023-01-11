package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteClientVpnRouteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteClientVpnRouteActionEnum action;
    public GetDeleteClientVpnRouteQueryParams withAction(GetDeleteClientVpnRouteActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ClientVpnEndpointId")
    public String clientVpnEndpointId;
    public GetDeleteClientVpnRouteQueryParams withClientVpnEndpointId(String clientVpnEndpointId) {
        this.clientVpnEndpointId = clientVpnEndpointId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DestinationCidrBlock")
    public String destinationCidrBlock;
    public GetDeleteClientVpnRouteQueryParams withDestinationCidrBlock(String destinationCidrBlock) {
        this.destinationCidrBlock = destinationCidrBlock;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetDeleteClientVpnRouteQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TargetVpcSubnetId")
    public String targetVpcSubnetId;
    public GetDeleteClientVpnRouteQueryParams withTargetVpcSubnetId(String targetVpcSubnetId) {
        this.targetVpcSubnetId = targetVpcSubnetId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteClientVpnRouteVersionEnum version;
    public GetDeleteClientVpnRouteQueryParams withVersion(GetDeleteClientVpnRouteVersionEnum version) {
        this.version = version;
        return this;
    }
}