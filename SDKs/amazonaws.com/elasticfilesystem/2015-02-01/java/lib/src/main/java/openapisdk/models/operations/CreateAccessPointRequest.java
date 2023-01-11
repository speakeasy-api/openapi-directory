package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAccessPointRequest {
    public CreateAccessPointHeaders headers;
    public CreateAccessPointRequest withHeaders(CreateAccessPointHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateAccessPointRequestBody request;
    public CreateAccessPointRequest withRequest(CreateAccessPointRequestBody request) {
        this.request = request;
        return this;
    }
}