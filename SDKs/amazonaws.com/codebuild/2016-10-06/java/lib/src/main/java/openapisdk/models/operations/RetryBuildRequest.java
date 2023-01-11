package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RetryBuildRequest {
    public RetryBuildHeaders headers;
    public RetryBuildRequest withHeaders(RetryBuildHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RetryBuildInput request;
    public RetryBuildRequest withRequest(openapisdk.models.shared.RetryBuildInput request) {
        this.request = request;
        return this;
    }
}