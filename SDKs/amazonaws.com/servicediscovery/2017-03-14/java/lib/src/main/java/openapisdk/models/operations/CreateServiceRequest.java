package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateServiceRequest {
    public CreateServiceHeaders headers;
    public CreateServiceRequest withHeaders(CreateServiceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateServiceRequest request;
    public CreateServiceRequest withRequest(openapisdk.models.shared.CreateServiceRequest request) {
        this.request = request;
        return this;
    }
}