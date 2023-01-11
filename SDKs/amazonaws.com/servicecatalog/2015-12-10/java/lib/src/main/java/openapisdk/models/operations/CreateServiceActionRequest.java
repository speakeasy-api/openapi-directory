package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateServiceActionRequest {
    public CreateServiceActionHeaders headers;
    public CreateServiceActionRequest withHeaders(CreateServiceActionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateServiceActionInput request;
    public CreateServiceActionRequest withRequest(openapisdk.models.shared.CreateServiceActionInput request) {
        this.request = request;
        return this;
    }
}