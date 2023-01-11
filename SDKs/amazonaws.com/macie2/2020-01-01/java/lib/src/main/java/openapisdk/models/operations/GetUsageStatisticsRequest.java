package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUsageStatisticsRequest {
    public GetUsageStatisticsQueryParams queryParams;
    public GetUsageStatisticsRequest withQueryParams(GetUsageStatisticsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetUsageStatisticsHeaders headers;
    public GetUsageStatisticsRequest withHeaders(GetUsageStatisticsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GetUsageStatisticsRequestBody request;
    public GetUsageStatisticsRequest withRequest(GetUsageStatisticsRequestBody request) {
        this.request = request;
        return this;
    }
}