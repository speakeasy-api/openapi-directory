package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateLfTagRequest {
    public CreateLfTagHeaders headers;
    public CreateLfTagRequest withHeaders(CreateLfTagHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateLfTagRequest request;
    public CreateLfTagRequest withRequest(openapisdk.models.shared.CreateLfTagRequest request) {
        this.request = request;
        return this;
    }
}