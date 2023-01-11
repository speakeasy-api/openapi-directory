package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RestoreServerRequest {
    public RestoreServerHeaders headers;
    public RestoreServerRequest withHeaders(RestoreServerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RestoreServerRequest request;
    public RestoreServerRequest withRequest(openapisdk.models.shared.RestoreServerRequest request) {
        this.request = request;
        return this;
    }
}