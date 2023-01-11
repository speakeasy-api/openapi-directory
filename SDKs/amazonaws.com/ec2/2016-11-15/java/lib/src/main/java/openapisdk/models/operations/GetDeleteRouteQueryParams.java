package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteRouteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteRouteActionEnum action;
    public GetDeleteRouteQueryParams withAction(GetDeleteRouteActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DestinationCidrBlock")
    public String destinationCidrBlock;
    public GetDeleteRouteQueryParams withDestinationCidrBlock(String destinationCidrBlock) {
        this.destinationCidrBlock = destinationCidrBlock;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DestinationIpv6CidrBlock")
    public String destinationIpv6CidrBlock;
    public GetDeleteRouteQueryParams withDestinationIpv6CidrBlock(String destinationIpv6CidrBlock) {
        this.destinationIpv6CidrBlock = destinationIpv6CidrBlock;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DestinationPrefixListId")
    public String destinationPrefixListId;
    public GetDeleteRouteQueryParams withDestinationPrefixListId(String destinationPrefixListId) {
        this.destinationPrefixListId = destinationPrefixListId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetDeleteRouteQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RouteTableId")
    public String routeTableId;
    public GetDeleteRouteQueryParams withRouteTableId(String routeTableId) {
        this.routeTableId = routeTableId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteRouteVersionEnum version;
    public GetDeleteRouteQueryParams withVersion(GetDeleteRouteVersionEnum version) {
        this.version = version;
        return this;
    }
}