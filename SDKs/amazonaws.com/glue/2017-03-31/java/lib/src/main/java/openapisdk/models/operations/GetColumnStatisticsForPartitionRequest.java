package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetColumnStatisticsForPartitionRequest {
    public GetColumnStatisticsForPartitionHeaders headers;
    public GetColumnStatisticsForPartitionRequest withHeaders(GetColumnStatisticsForPartitionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetColumnStatisticsForPartitionRequest request;
    public GetColumnStatisticsForPartitionRequest withRequest(openapisdk.models.shared.GetColumnStatisticsForPartitionRequest request) {
        this.request = request;
        return this;
    }
}