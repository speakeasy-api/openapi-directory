package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStatisticsRequest {
    public GetStatisticsHeaders headers;
    public GetStatisticsRequest withHeaders(GetStatisticsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GetStatisticsRequestBody request;
    public GetStatisticsRequest withRequest(GetStatisticsRequestBody request) {
        this.request = request;
        return this;
    }
}