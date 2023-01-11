package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutImageRequest {
    public PutImageHeaders headers;
    public PutImageRequest withHeaders(PutImageHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutImageRequest request;
    public PutImageRequest withRequest(openapisdk.models.shared.PutImageRequest request) {
        this.request = request;
        return this;
    }
}