package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutObjectRequest {
    public PutObjectPathParams pathParams;
    public PutObjectRequest withPathParams(PutObjectPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutObjectHeaders headers;
    public PutObjectRequest withHeaders(PutObjectHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutObjectRequestBody request;
    public PutObjectRequest withRequest(PutObjectRequestBody request) {
        this.request = request;
        return this;
    }
}