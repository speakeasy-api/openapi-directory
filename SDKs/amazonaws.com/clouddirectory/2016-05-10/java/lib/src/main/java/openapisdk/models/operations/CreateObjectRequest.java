package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateObjectRequest {
    public CreateObjectHeaders headers;
    public CreateObjectRequest withHeaders(CreateObjectHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateObjectRequestBody request;
    public CreateObjectRequest withRequest(CreateObjectRequestBody request) {
        this.request = request;
        return this;
    }
}