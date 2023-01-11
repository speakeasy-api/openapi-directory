package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDatabasesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public ListDatabasesQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public ListDatabasesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}