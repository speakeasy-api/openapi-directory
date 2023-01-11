package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTagOptionRequest {
    public CreateTagOptionHeaders headers;
    public CreateTagOptionRequest withHeaders(CreateTagOptionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateTagOptionInput request;
    public CreateTagOptionRequest withRequest(openapisdk.models.shared.CreateTagOptionInput request) {
        this.request = request;
        return this;
    }
}