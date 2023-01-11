package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCustomMetricRequest {
    public UpdateCustomMetricPathParams pathParams;
    public UpdateCustomMetricRequest withPathParams(UpdateCustomMetricPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateCustomMetricHeaders headers;
    public UpdateCustomMetricRequest withHeaders(UpdateCustomMetricHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateCustomMetricRequestBody request;
    public UpdateCustomMetricRequest withRequest(UpdateCustomMetricRequestBody request) {
        this.request = request;
        return this;
    }
}