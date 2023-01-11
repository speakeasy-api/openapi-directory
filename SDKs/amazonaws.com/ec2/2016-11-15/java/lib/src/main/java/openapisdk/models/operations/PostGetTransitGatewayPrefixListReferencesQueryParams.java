package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetTransitGatewayPrefixListReferencesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetTransitGatewayPrefixListReferencesActionEnum action;
    public PostGetTransitGatewayPrefixListReferencesQueryParams withAction(PostGetTransitGatewayPrefixListReferencesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostGetTransitGatewayPrefixListReferencesQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostGetTransitGatewayPrefixListReferencesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetTransitGatewayPrefixListReferencesVersionEnum version;
    public PostGetTransitGatewayPrefixListReferencesQueryParams withVersion(PostGetTransitGatewayPrefixListReferencesVersionEnum version) {
        this.version = version;
        return this;
    }
}