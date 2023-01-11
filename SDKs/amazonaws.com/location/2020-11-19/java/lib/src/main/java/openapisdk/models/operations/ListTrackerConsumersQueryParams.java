package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTrackerConsumersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public ListTrackerConsumersQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public ListTrackerConsumersQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}