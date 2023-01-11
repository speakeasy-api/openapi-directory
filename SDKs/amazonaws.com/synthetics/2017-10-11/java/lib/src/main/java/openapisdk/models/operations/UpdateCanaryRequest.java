package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCanaryRequest {
    public UpdateCanaryPathParams pathParams;
    public UpdateCanaryRequest withPathParams(UpdateCanaryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateCanaryHeaders headers;
    public UpdateCanaryRequest withHeaders(UpdateCanaryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateCanaryRequestBody request;
    public UpdateCanaryRequest withRequest(UpdateCanaryRequestBody request) {
        this.request = request;
        return this;
    }
}