package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateApiRequest {
    public CreateApiHeaders headers;
    public CreateApiRequest withHeaders(CreateApiHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateApiRequestBody request;
    public CreateApiRequest withRequest(CreateApiRequestBody request) {
        this.request = request;
        return this;
    }
}