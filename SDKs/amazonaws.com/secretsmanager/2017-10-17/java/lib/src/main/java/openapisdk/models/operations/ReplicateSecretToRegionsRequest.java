package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReplicateSecretToRegionsRequest {
    public ReplicateSecretToRegionsHeaders headers;
    public ReplicateSecretToRegionsRequest withHeaders(ReplicateSecretToRegionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ReplicateSecretToRegionsRequest request;
    public ReplicateSecretToRegionsRequest withRequest(openapisdk.models.shared.ReplicateSecretToRegionsRequest request) {
        this.request = request;
        return this;
    }
}