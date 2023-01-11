package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegistryCreateArtifactRequest {
    public RegistryCreateArtifactPathParams pathParams;
    public RegistryCreateArtifactRequest withPathParams(RegistryCreateArtifactPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RegistryCreateArtifactQueryParams queryParams;
    public RegistryCreateArtifactRequest withQueryParams(RegistryCreateArtifactQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public RegistryCreateArtifactRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}