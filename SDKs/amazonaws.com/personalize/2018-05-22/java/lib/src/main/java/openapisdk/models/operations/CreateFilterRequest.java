package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateFilterRequest {
    public CreateFilterHeaders headers;
    public CreateFilterRequest withHeaders(CreateFilterHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateFilterRequest request;
    public CreateFilterRequest withRequest(openapisdk.models.shared.CreateFilterRequest request) {
        this.request = request;
        return this;
    }
}