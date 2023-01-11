package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListGraphsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public ListGraphsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public ListGraphsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}