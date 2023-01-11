package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateColumnStatisticsForTableRequest {
    public UpdateColumnStatisticsForTableHeaders headers;
    public UpdateColumnStatisticsForTableRequest withHeaders(UpdateColumnStatisticsForTableHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateColumnStatisticsForTableRequest request;
    public UpdateColumnStatisticsForTableRequest withRequest(openapisdk.models.shared.UpdateColumnStatisticsForTableRequest request) {
        this.request = request;
        return this;
    }
}