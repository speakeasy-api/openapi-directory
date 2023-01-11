package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCustomActionTypeRequest {
    public CreateCustomActionTypeHeaders headers;
    public CreateCustomActionTypeRequest withHeaders(CreateCustomActionTypeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateCustomActionTypeInput request;
    public CreateCustomActionTypeRequest withRequest(openapisdk.models.shared.CreateCustomActionTypeInput request) {
        this.request = request;
        return this;
    }
}