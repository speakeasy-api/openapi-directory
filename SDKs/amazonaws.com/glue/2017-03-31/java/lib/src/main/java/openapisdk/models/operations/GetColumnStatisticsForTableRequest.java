package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetColumnStatisticsForTableRequest {
    public GetColumnStatisticsForTableHeaders headers;
    public GetColumnStatisticsForTableRequest withHeaders(GetColumnStatisticsForTableHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetColumnStatisticsForTableRequest request;
    public GetColumnStatisticsForTableRequest withRequest(openapisdk.models.shared.GetColumnStatisticsForTableRequest request) {
        this.request = request;
        return this;
    }
}