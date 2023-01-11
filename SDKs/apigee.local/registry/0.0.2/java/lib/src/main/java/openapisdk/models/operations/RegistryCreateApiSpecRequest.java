package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegistryCreateApiSpecRequest {
    public RegistryCreateApiSpecPathParams pathParams;
    public RegistryCreateApiSpecRequest withPathParams(RegistryCreateApiSpecPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RegistryCreateApiSpecQueryParams queryParams;
    public RegistryCreateApiSpecRequest withQueryParams(RegistryCreateApiSpecQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public RegistryCreateApiSpecRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}