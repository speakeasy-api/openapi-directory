package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateLagRequest {
    public CreateLagHeaders headers;
    public CreateLagRequest withHeaders(CreateLagHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateLagRequest request;
    public CreateLagRequest withRequest(openapisdk.models.shared.CreateLagRequest request) {
        this.request = request;
        return this;
    }
}