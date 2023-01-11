package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegistryTagApiSpecRevisionRequest {
    public RegistryTagApiSpecRevisionPathParams pathParams;
    public RegistryTagApiSpecRevisionRequest withPathParams(RegistryTagApiSpecRevisionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public RegistryTagApiSpecRevisionRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}