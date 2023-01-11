package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateOutpostRequest {
    public CreateOutpostHeaders headers;
    public CreateOutpostRequest withHeaders(CreateOutpostHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateOutpostRequestBody request;
    public CreateOutpostRequest withRequest(CreateOutpostRequestBody request) {
        this.request = request;
        return this;
    }
}