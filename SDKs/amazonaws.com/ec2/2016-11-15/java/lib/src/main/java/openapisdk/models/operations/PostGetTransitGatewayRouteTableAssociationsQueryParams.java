package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetTransitGatewayRouteTableAssociationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetTransitGatewayRouteTableAssociationsActionEnum action;
    public PostGetTransitGatewayRouteTableAssociationsQueryParams withAction(PostGetTransitGatewayRouteTableAssociationsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostGetTransitGatewayRouteTableAssociationsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostGetTransitGatewayRouteTableAssociationsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetTransitGatewayRouteTableAssociationsVersionEnum version;
    public PostGetTransitGatewayRouteTableAssociationsQueryParams withVersion(PostGetTransitGatewayRouteTableAssociationsVersionEnum version) {
        this.version = version;
        return this;
    }
}