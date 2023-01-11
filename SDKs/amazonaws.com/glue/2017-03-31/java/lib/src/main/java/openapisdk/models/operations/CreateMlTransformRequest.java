package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateMlTransformRequest {
    public CreateMlTransformHeaders headers;
    public CreateMlTransformRequest withHeaders(CreateMlTransformHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateMlTransformRequest request;
    public CreateMlTransformRequest withRequest(openapisdk.models.shared.CreateMlTransformRequest request) {
        this.request = request;
        return this;
    }
}