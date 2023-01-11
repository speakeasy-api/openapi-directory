package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeLocalGatewayRouteTableVpcAssociationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeLocalGatewayRouteTableVpcAssociationsActionEnum action;
    public PostDescribeLocalGatewayRouteTableVpcAssociationsQueryParams withAction(PostDescribeLocalGatewayRouteTableVpcAssociationsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostDescribeLocalGatewayRouteTableVpcAssociationsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostDescribeLocalGatewayRouteTableVpcAssociationsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeLocalGatewayRouteTableVpcAssociationsVersionEnum version;
    public PostDescribeLocalGatewayRouteTableVpcAssociationsQueryParams withVersion(PostDescribeLocalGatewayRouteTableVpcAssociationsVersionEnum version) {
        this.version = version;
        return this;
    }
}