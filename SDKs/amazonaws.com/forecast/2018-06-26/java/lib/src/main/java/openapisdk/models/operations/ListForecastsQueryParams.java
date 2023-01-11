package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListForecastsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public ListForecastsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public ListForecastsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}