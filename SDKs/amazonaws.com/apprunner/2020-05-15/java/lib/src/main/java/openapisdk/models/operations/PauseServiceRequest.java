package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PauseServiceRequest {
    public PauseServiceHeaders headers;
    public PauseServiceRequest withHeaders(PauseServiceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PauseServiceRequest request;
    public PauseServiceRequest withRequest(openapisdk.models.shared.PauseServiceRequest request) {
        this.request = request;
        return this;
    }
}