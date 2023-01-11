package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCreateClientVpnRouteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetCreateClientVpnRouteActionEnum action;
    public GetCreateClientVpnRouteQueryParams withAction(GetCreateClientVpnRouteActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ClientToken")
    public String clientToken;
    public GetCreateClientVpnRouteQueryParams withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ClientVpnEndpointId")
    public String clientVpnEndpointId;
    public GetCreateClientVpnRouteQueryParams withClientVpnEndpointId(String clientVpnEndpointId) {
        this.clientVpnEndpointId = clientVpnEndpointId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Description")
    public String description;
    public GetCreateClientVpnRouteQueryParams withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DestinationCidrBlock")
    public String destinationCidrBlock;
    public GetCreateClientVpnRouteQueryParams withDestinationCidrBlock(String destinationCidrBlock) {
        this.destinationCidrBlock = destinationCidrBlock;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetCreateClientVpnRouteQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TargetVpcSubnetId")
    public String targetVpcSubnetId;
    public GetCreateClientVpnRouteQueryParams withTargetVpcSubnetId(String targetVpcSubnetId) {
        this.targetVpcSubnetId = targetVpcSubnetId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetCreateClientVpnRouteVersionEnum version;
    public GetCreateClientVpnRouteQueryParams withVersion(GetCreateClientVpnRouteVersionEnum version) {
        this.version = version;
        return this;
    }
}