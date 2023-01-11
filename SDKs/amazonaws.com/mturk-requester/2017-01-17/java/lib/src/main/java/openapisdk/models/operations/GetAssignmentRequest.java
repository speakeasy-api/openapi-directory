package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAssignmentRequest {
    public GetAssignmentHeaders headers;
    public GetAssignmentRequest withHeaders(GetAssignmentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetAssignmentRequest request;
    public GetAssignmentRequest withRequest(openapisdk.models.shared.GetAssignmentRequest request) {
        this.request = request;
        return this;
    }
}