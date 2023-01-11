package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeLocalGatewayRouteTablesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeLocalGatewayRouteTablesActionEnum action;
    public PostDescribeLocalGatewayRouteTablesQueryParams withAction(PostDescribeLocalGatewayRouteTablesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostDescribeLocalGatewayRouteTablesQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostDescribeLocalGatewayRouteTablesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeLocalGatewayRouteTablesVersionEnum version;
    public PostDescribeLocalGatewayRouteTablesQueryParams withVersion(PostDescribeLocalGatewayRouteTablesVersionEnum version) {
        this.version = version;
        return this;
    }
}