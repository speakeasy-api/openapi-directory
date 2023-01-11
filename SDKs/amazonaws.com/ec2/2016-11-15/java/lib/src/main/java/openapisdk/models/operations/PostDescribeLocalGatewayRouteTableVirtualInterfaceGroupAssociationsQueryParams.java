package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsActionEnum action;
    public PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsQueryParams withAction(PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsVersionEnum version;
    public PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsQueryParams withVersion(PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsVersionEnum version) {
        this.version = version;
        return this;
    }
}