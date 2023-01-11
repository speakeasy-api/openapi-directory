package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateGrantVersionRequest {
    public CreateGrantVersionHeaders headers;
    public CreateGrantVersionRequest withHeaders(CreateGrantVersionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateGrantVersionRequest request;
    public CreateGrantVersionRequest withRequest(openapisdk.models.shared.CreateGrantVersionRequest request) {
        this.request = request;
        return this;
    }
}