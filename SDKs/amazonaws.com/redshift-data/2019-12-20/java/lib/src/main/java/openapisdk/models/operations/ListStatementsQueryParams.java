package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListStatementsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public ListStatementsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public ListStatementsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}