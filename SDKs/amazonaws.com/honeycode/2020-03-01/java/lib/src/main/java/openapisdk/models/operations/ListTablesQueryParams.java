package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTablesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListTablesQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListTablesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}