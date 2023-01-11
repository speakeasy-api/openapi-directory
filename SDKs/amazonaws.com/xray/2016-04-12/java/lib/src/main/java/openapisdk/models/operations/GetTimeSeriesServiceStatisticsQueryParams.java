package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTimeSeriesServiceStatisticsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public GetTimeSeriesServiceStatisticsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}