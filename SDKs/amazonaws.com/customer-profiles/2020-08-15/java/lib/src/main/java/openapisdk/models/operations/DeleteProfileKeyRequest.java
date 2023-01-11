package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteProfileKeyRequest {
    public DeleteProfileKeyPathParams pathParams;
    public DeleteProfileKeyRequest withPathParams(DeleteProfileKeyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteProfileKeyHeaders headers;
    public DeleteProfileKeyRequest withHeaders(DeleteProfileKeyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DeleteProfileKeyRequestBody request;
    public DeleteProfileKeyRequest withRequest(DeleteProfileKeyRequestBody request) {
        this.request = request;
        return this;
    }
}