package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateColumnStatisticsForPartitionRequest {
    public UpdateColumnStatisticsForPartitionHeaders headers;
    public UpdateColumnStatisticsForPartitionRequest withHeaders(UpdateColumnStatisticsForPartitionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateColumnStatisticsForPartitionRequest request;
    public UpdateColumnStatisticsForPartitionRequest withRequest(openapisdk.models.shared.UpdateColumnStatisticsForPartitionRequest request) {
        this.request = request;
        return this;
    }
}