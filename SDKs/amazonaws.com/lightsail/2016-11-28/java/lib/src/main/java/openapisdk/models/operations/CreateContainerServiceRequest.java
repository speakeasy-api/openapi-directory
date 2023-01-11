package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateContainerServiceRequest {
    public CreateContainerServiceHeaders headers;
    public CreateContainerServiceRequest withHeaders(CreateContainerServiceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateContainerServiceRequest request;
    public CreateContainerServiceRequest withRequest(openapisdk.models.shared.CreateContainerServiceRequest request) {
        this.request = request;
        return this;
    }
}