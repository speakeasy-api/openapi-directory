package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartStreamEncryptionRequest {
    public StartStreamEncryptionHeaders headers;
    public StartStreamEncryptionRequest withHeaders(StartStreamEncryptionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartStreamEncryptionInput request;
    public StartStreamEncryptionRequest withRequest(openapisdk.models.shared.StartStreamEncryptionInput request) {
        this.request = request;
        return this;
    }
}