package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutProfileObjectRequest {
    public PutProfileObjectPathParams pathParams;
    public PutProfileObjectRequest withPathParams(PutProfileObjectPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutProfileObjectHeaders headers;
    public PutProfileObjectRequest withHeaders(PutProfileObjectHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutProfileObjectRequestBody request;
    public PutProfileObjectRequest withRequest(PutProfileObjectRequestBody request) {
        this.request = request;
        return this;
    }
}