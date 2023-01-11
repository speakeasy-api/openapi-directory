package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegistryUpdateApiSpecRequest {
    public RegistryUpdateApiSpecPathParams pathParams;
    public RegistryUpdateApiSpecRequest withPathParams(RegistryUpdateApiSpecPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RegistryUpdateApiSpecQueryParams queryParams;
    public RegistryUpdateApiSpecRequest withQueryParams(RegistryUpdateApiSpecQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public RegistryUpdateApiSpecRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}