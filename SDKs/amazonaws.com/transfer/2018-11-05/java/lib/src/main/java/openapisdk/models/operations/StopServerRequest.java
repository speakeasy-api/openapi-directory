package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopServerRequest {
    public StopServerHeaders headers;
    public StopServerRequest withHeaders(StopServerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StopServerRequest request;
    public StopServerRequest withRequest(openapisdk.models.shared.StopServerRequest request) {
        this.request = request;
        return this;
    }
}