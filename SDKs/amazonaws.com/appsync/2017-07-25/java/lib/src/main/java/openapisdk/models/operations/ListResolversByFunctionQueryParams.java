package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListResolversByFunctionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListResolversByFunctionQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListResolversByFunctionQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}