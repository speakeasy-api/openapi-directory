package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegistryRollbackApiSpecRequest {
    public RegistryRollbackApiSpecPathParams pathParams;
    public RegistryRollbackApiSpecRequest withPathParams(RegistryRollbackApiSpecPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public RegistryRollbackApiSpecRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}