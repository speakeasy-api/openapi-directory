package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateMlModelRequest {
    public CreateMlModelHeaders headers;
    public CreateMlModelRequest withHeaders(CreateMlModelHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateMlModelInput request;
    public CreateMlModelRequest withRequest(openapisdk.models.shared.CreateMlModelInput request) {
        this.request = request;
        return this;
    }
}