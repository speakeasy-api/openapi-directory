package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListResolverEndpointsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public ListResolverEndpointsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public ListResolverEndpointsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}