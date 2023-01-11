package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssignInstanceRequest {
    public AssignInstanceHeaders headers;
    public AssignInstanceRequest withHeaders(AssignInstanceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssignInstanceRequest request;
    public AssignInstanceRequest withRequest(openapisdk.models.shared.AssignInstanceRequest request) {
        this.request = request;
        return this;
    }
}