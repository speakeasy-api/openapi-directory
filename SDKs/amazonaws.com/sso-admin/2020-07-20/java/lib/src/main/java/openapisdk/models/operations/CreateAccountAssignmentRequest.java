package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAccountAssignmentRequest {
    public CreateAccountAssignmentHeaders headers;
    public CreateAccountAssignmentRequest withHeaders(CreateAccountAssignmentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateAccountAssignmentRequest request;
    public CreateAccountAssignmentRequest withRequest(openapisdk.models.shared.CreateAccountAssignmentRequest request) {
        this.request = request;
        return this;
    }
}