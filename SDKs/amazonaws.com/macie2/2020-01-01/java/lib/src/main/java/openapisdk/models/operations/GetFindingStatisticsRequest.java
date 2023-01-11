package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFindingStatisticsRequest {
    public GetFindingStatisticsHeaders headers;
    public GetFindingStatisticsRequest withHeaders(GetFindingStatisticsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GetFindingStatisticsRequestBody request;
    public GetFindingStatisticsRequest withRequest(GetFindingStatisticsRequestBody request) {
        this.request = request;
        return this;
    }
}