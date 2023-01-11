package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegistryCreateApiVersionRequest {
    public RegistryCreateApiVersionPathParams pathParams;
    public RegistryCreateApiVersionRequest withPathParams(RegistryCreateApiVersionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RegistryCreateApiVersionQueryParams queryParams;
    public RegistryCreateApiVersionRequest withQueryParams(RegistryCreateApiVersionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public RegistryCreateApiVersionRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}