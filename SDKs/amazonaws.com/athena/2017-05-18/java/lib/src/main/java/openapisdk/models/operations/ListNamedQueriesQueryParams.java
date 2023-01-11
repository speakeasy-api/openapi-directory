package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListNamedQueriesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public ListNamedQueriesQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public ListNamedQueriesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}