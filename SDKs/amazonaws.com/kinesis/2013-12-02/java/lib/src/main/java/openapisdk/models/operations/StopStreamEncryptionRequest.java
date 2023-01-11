package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopStreamEncryptionRequest {
    public StopStreamEncryptionHeaders headers;
    public StopStreamEncryptionRequest withHeaders(StopStreamEncryptionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StopStreamEncryptionInput request;
    public StopStreamEncryptionRequest withRequest(openapisdk.models.shared.StopStreamEncryptionInput request) {
        this.request = request;
        return this;
    }
}