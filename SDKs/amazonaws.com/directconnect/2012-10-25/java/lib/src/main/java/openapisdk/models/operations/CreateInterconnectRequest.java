package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateInterconnectRequest {
    public CreateInterconnectHeaders headers;
    public CreateInterconnectRequest withHeaders(CreateInterconnectHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateInterconnectRequest request;
    public CreateInterconnectRequest withRequest(openapisdk.models.shared.CreateInterconnectRequest request) {
        this.request = request;
        return this;
    }
}