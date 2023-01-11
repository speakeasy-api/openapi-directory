package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SendTaskSuccessRequest {
    public SendTaskSuccessHeaders headers;
    public SendTaskSuccessRequest withHeaders(SendTaskSuccessHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SendTaskSuccessInput request;
    public SendTaskSuccessRequest withRequest(openapisdk.models.shared.SendTaskSuccessInput request) {
        this.request = request;
        return this;
    }
}