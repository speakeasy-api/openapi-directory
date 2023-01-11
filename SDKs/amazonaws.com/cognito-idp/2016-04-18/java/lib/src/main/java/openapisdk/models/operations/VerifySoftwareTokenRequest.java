package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VerifySoftwareTokenRequest {
    public VerifySoftwareTokenHeaders headers;
    public VerifySoftwareTokenRequest withHeaders(VerifySoftwareTokenHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.VerifySoftwareTokenRequest request;
    public VerifySoftwareTokenRequest withRequest(openapisdk.models.shared.VerifySoftwareTokenRequest request) {
        this.request = request;
        return this;
    }
}