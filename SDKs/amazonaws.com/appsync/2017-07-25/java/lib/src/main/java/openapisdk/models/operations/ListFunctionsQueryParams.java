package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListFunctionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListFunctionsQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListFunctionsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}