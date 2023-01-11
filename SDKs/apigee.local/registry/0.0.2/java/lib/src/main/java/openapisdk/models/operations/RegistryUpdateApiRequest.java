package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegistryUpdateApiRequest {
    public RegistryUpdateApiPathParams pathParams;
    public RegistryUpdateApiRequest withPathParams(RegistryUpdateApiPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RegistryUpdateApiQueryParams queryParams;
    public RegistryUpdateApiRequest withQueryParams(RegistryUpdateApiQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public RegistryUpdateApiRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}