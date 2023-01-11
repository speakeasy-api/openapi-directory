package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateModelRequest {
    public CreateModelHeaders headers;
    public CreateModelRequest withHeaders(CreateModelHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateModelRequest request;
    public CreateModelRequest withRequest(openapisdk.models.shared.CreateModelRequest request) {
        this.request = request;
        return this;
    }
}