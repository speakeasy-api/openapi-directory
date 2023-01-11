package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateMetricSetRequest {
    public CreateMetricSetHeaders headers;
    public CreateMetricSetRequest withHeaders(CreateMetricSetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateMetricSetRequestBody request;
    public CreateMetricSetRequest withRequest(CreateMetricSetRequestBody request) {
        this.request = request;
        return this;
    }
}