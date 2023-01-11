package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListPreparedStatementsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public ListPreparedStatementsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public ListPreparedStatementsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}