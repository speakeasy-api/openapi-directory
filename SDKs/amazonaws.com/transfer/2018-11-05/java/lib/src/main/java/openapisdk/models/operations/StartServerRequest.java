package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartServerRequest {
    public StartServerHeaders headers;
    public StartServerRequest withHeaders(StartServerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartServerRequest request;
    public StartServerRequest withRequest(openapisdk.models.shared.StartServerRequest request) {
        this.request = request;
        return this;
    }
}