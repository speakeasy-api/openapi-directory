package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SendCommandRequest {
    public SendCommandHeaders headers;
    public SendCommandRequest withHeaders(SendCommandHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SendCommandRequest request;
    public SendCommandRequest withRequest(openapisdk.models.shared.SendCommandRequest request) {
        this.request = request;
        return this;
    }
}