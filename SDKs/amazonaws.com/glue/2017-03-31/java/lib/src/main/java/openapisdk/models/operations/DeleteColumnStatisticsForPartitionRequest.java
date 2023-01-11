package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteColumnStatisticsForPartitionRequest {
    public DeleteColumnStatisticsForPartitionHeaders headers;
    public DeleteColumnStatisticsForPartitionRequest withHeaders(DeleteColumnStatisticsForPartitionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteColumnStatisticsForPartitionRequest request;
    public DeleteColumnStatisticsForPartitionRequest withRequest(openapisdk.models.shared.DeleteColumnStatisticsForPartitionRequest request) {
        this.request = request;
        return this;
    }
}