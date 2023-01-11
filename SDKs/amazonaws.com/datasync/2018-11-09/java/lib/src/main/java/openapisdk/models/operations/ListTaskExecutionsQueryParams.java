package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTaskExecutionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public ListTaskExecutionsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public ListTaskExecutionsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}