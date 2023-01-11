package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCustomMetricRequest {
    public CreateCustomMetricPathParams pathParams;
    public CreateCustomMetricRequest withPathParams(CreateCustomMetricPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateCustomMetricHeaders headers;
    public CreateCustomMetricRequest withHeaders(CreateCustomMetricHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateCustomMetricRequestBody request;
    public CreateCustomMetricRequest withRequest(CreateCustomMetricRequestBody request) {
        this.request = request;
        return this;
    }
}