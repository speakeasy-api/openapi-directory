package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegistryCreateProjectRequest {
    public RegistryCreateProjectQueryParams queryParams;
    public RegistryCreateProjectRequest withQueryParams(RegistryCreateProjectQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public RegistryCreateProjectRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}