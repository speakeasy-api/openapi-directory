package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegistryReplaceArtifactRequest {
    public RegistryReplaceArtifactPathParams pathParams;
    public RegistryReplaceArtifactRequest withPathParams(RegistryReplaceArtifactPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public RegistryReplaceArtifactRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}