package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegistryCreateApiRequest {
    public RegistryCreateApiPathParams pathParams;
    public RegistryCreateApiRequest withPathParams(RegistryCreateApiPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RegistryCreateApiQueryParams queryParams;
    public RegistryCreateApiRequest withQueryParams(RegistryCreateApiQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public RegistryCreateApiRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}