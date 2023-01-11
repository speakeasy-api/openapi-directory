package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUsageStatisticsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public String maxResults;
    public GetUsageStatisticsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public GetUsageStatisticsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}