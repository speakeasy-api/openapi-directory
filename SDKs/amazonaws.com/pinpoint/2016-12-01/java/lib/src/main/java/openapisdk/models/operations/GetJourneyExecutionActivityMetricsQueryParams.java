package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetJourneyExecutionActivityMetricsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=next-token")
    public String nextToken;
    public GetJourneyExecutionActivityMetricsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page-size")
    public String pageSize;
    public GetJourneyExecutionActivityMetricsQueryParams withPageSize(String pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}