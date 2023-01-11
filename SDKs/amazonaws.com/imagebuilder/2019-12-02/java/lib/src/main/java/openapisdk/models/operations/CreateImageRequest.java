package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateImageRequest {
    public CreateImageHeaders headers;
    public CreateImageRequest withHeaders(CreateImageHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateImageRequestBody request;
    public CreateImageRequest withRequest(CreateImageRequestBody request) {
        this.request = request;
        return this;
    }
}