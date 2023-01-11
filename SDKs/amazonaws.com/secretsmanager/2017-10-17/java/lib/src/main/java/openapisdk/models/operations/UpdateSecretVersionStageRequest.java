package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSecretVersionStageRequest {
    public UpdateSecretVersionStageHeaders headers;
    public UpdateSecretVersionStageRequest withHeaders(UpdateSecretVersionStageHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateSecretVersionStageRequest request;
    public UpdateSecretVersionStageRequest withRequest(openapisdk.models.shared.UpdateSecretVersionStageRequest request) {
        this.request = request;
        return this;
    }
}