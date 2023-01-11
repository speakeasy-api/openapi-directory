package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListStoredQueriesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public ListStoredQueriesQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public ListStoredQueriesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}