package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SendTaskFailureRequest {
    public SendTaskFailureHeaders headers;
    public SendTaskFailureRequest withHeaders(SendTaskFailureHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SendTaskFailureInput request;
    public SendTaskFailureRequest withRequest(openapisdk.models.shared.SendTaskFailureInput request) {
        this.request = request;
        return this;
    }
}