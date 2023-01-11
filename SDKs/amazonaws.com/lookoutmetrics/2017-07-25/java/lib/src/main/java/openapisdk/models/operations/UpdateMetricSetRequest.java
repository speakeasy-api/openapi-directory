package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateMetricSetRequest {
    public UpdateMetricSetHeaders headers;
    public UpdateMetricSetRequest withHeaders(UpdateMetricSetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateMetricSetRequestBody request;
    public UpdateMetricSetRequest withRequest(UpdateMetricSetRequestBody request) {
        this.request = request;
        return this;
    }
}