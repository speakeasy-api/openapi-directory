package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListUserPoolsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public ListUserPoolsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public ListUserPoolsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}