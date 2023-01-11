package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetTransitGatewayRouteTablePropagationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetTransitGatewayRouteTablePropagationsActionEnum action;
    public PostGetTransitGatewayRouteTablePropagationsQueryParams withAction(PostGetTransitGatewayRouteTablePropagationsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostGetTransitGatewayRouteTablePropagationsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostGetTransitGatewayRouteTablePropagationsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetTransitGatewayRouteTablePropagationsVersionEnum version;
    public PostGetTransitGatewayRouteTablePropagationsQueryParams withVersion(PostGetTransitGatewayRouteTablePropagationsVersionEnum version) {
        this.version = version;
        return this;
    }
}