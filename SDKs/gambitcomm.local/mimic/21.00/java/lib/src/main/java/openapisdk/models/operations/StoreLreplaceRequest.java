package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StoreLreplaceRequest {
    public StoreLreplacePathParams pathParams;
    public StoreLreplaceRequest withPathParams(StoreLreplacePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public String request;
    public StoreLreplaceRequest withRequest(String request) {
        this.request = request;
        return this;
    }
}