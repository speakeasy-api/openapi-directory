package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeTransitGatewayRouteTablesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeTransitGatewayRouteTablesActionEnum action;
    public PostDescribeTransitGatewayRouteTablesQueryParams withAction(PostDescribeTransitGatewayRouteTablesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostDescribeTransitGatewayRouteTablesQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostDescribeTransitGatewayRouteTablesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeTransitGatewayRouteTablesVersionEnum version;
    public PostDescribeTransitGatewayRouteTablesQueryParams withVersion(PostDescribeTransitGatewayRouteTablesVersionEnum version) {
        this.version = version;
        return this;
    }
}