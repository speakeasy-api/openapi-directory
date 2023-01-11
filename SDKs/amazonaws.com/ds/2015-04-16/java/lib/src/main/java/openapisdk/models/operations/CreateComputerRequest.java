package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateComputerRequest {
    public CreateComputerHeaders headers;
    public CreateComputerRequest withHeaders(CreateComputerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateComputerRequest request;
    public CreateComputerRequest withRequest(openapisdk.models.shared.CreateComputerRequest request) {
        this.request = request;
        return this;
    }
}