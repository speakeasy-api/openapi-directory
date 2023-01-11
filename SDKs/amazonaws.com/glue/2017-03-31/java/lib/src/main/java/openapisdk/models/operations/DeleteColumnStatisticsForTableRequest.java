package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteColumnStatisticsForTableRequest {
    public DeleteColumnStatisticsForTableHeaders headers;
    public DeleteColumnStatisticsForTableRequest withHeaders(DeleteColumnStatisticsForTableHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteColumnStatisticsForTableRequest request;
    public DeleteColumnStatisticsForTableRequest withRequest(openapisdk.models.shared.DeleteColumnStatisticsForTableRequest request) {
        this.request = request;
        return this;
    }
}