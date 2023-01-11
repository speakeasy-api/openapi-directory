package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateConstraintRequest {
    public CreateConstraintHeaders headers;
    public CreateConstraintRequest withHeaders(CreateConstraintHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateConstraintInput request;
    public CreateConstraintRequest withRequest(openapisdk.models.shared.CreateConstraintInput request) {
        this.request = request;
        return this;
    }
}