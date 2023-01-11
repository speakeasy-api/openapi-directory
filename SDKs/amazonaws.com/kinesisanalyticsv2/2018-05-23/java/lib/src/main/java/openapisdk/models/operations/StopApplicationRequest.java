package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopApplicationRequest {
    public StopApplicationHeaders headers;
    public StopApplicationRequest withHeaders(StopApplicationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StopApplicationRequest request;
    public StopApplicationRequest withRequest(openapisdk.models.shared.StopApplicationRequest request) {
        this.request = request;
        return this;
    }
}