package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteProfileObjectRequest {
    public DeleteProfileObjectPathParams pathParams;
    public DeleteProfileObjectRequest withPathParams(DeleteProfileObjectPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteProfileObjectHeaders headers;
    public DeleteProfileObjectRequest withHeaders(DeleteProfileObjectHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DeleteProfileObjectRequestBody request;
    public DeleteProfileObjectRequest withRequest(DeleteProfileObjectRequestBody request) {
        this.request = request;
        return this;
    }
}