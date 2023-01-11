package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchTablesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public SearchTablesQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public SearchTablesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}