package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateContainerRequest {
    public CreateContainerHeaders headers;
    public CreateContainerRequest withHeaders(CreateContainerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateContainerInput request;
    public CreateContainerRequest withRequest(openapisdk.models.shared.CreateContainerInput request) {
        this.request = request;
        return this;
    }
}