package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegistryUpdateProjectRequest {
    public RegistryUpdateProjectPathParams pathParams;
    public RegistryUpdateProjectRequest withPathParams(RegistryUpdateProjectPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RegistryUpdateProjectQueryParams queryParams;
    public RegistryUpdateProjectRequest withQueryParams(RegistryUpdateProjectQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public RegistryUpdateProjectRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}