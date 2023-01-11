package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SendContactMethodVerificationRequest {
    public SendContactMethodVerificationHeaders headers;
    public SendContactMethodVerificationRequest withHeaders(SendContactMethodVerificationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SendContactMethodVerificationRequest request;
    public SendContactMethodVerificationRequest withRequest(openapisdk.models.shared.SendContactMethodVerificationRequest request) {
        this.request = request;
        return this;
    }
}