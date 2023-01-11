package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteProfileRequest {
    public DeleteProfilePathParams pathParams;
    public DeleteProfileRequest withPathParams(DeleteProfilePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteProfileHeaders headers;
    public DeleteProfileRequest withHeaders(DeleteProfileHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DeleteProfileRequestBody request;
    public DeleteProfileRequest withRequest(DeleteProfileRequestBody request) {
        this.request = request;
        return this;
    }
}