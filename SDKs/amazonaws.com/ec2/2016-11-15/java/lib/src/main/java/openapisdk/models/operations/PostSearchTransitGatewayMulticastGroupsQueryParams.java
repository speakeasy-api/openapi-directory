package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSearchTransitGatewayMulticastGroupsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostSearchTransitGatewayMulticastGroupsActionEnum action;
    public PostSearchTransitGatewayMulticastGroupsQueryParams withAction(PostSearchTransitGatewayMulticastGroupsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostSearchTransitGatewayMulticastGroupsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostSearchTransitGatewayMulticastGroupsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostSearchTransitGatewayMulticastGroupsVersionEnum version;
    public PostSearchTransitGatewayMulticastGroupsQueryParams withVersion(PostSearchTransitGatewayMulticastGroupsVersionEnum version) {
        this.version = version;
        return this;
    }
}