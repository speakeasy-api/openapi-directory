package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetTransitGatewayMulticastDomainAssociationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetTransitGatewayMulticastDomainAssociationsActionEnum action;
    public PostGetTransitGatewayMulticastDomainAssociationsQueryParams withAction(PostGetTransitGatewayMulticastDomainAssociationsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostGetTransitGatewayMulticastDomainAssociationsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostGetTransitGatewayMulticastDomainAssociationsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetTransitGatewayMulticastDomainAssociationsVersionEnum version;
    public PostGetTransitGatewayMulticastDomainAssociationsQueryParams withVersion(PostGetTransitGatewayMulticastDomainAssociationsVersionEnum version) {
        this.version = version;
        return this;
    }
}