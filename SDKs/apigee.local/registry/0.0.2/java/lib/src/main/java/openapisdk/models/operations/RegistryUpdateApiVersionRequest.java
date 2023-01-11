package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegistryUpdateApiVersionRequest {
    public RegistryUpdateApiVersionPathParams pathParams;
    public RegistryUpdateApiVersionRequest withPathParams(RegistryUpdateApiVersionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RegistryUpdateApiVersionQueryParams queryParams;
    public RegistryUpdateApiVersionRequest withQueryParams(RegistryUpdateApiVersionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public RegistryUpdateApiVersionRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}