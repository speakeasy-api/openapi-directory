package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetJourneyExecutionMetricsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=next-token")
    public String nextToken;
    public GetJourneyExecutionMetricsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page-size")
    public String pageSize;
    public GetJourneyExecutionMetricsQueryParams withPageSize(String pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}