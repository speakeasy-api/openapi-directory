package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RejectAssignmentRequest {
    public RejectAssignmentHeaders headers;
    public RejectAssignmentRequest withHeaders(RejectAssignmentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RejectAssignmentRequest request;
    public RejectAssignmentRequest withRequest(openapisdk.models.shared.RejectAssignmentRequest request) {
        this.request = request;
        return this;
    }
}