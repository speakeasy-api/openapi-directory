package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListFleetMetricsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListFleetMetricsQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListFleetMetricsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}