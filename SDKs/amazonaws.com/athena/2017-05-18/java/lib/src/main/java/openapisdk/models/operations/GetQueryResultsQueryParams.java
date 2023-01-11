package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetQueryResultsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public GetQueryResultsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public GetQueryResultsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}