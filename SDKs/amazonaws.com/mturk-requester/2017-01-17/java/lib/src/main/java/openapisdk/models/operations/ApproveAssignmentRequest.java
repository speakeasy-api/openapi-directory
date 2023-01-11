package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApproveAssignmentRequest {
    public ApproveAssignmentHeaders headers;
    public ApproveAssignmentRequest withHeaders(ApproveAssignmentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ApproveAssignmentRequest request;
    public ApproveAssignmentRequest withRequest(openapisdk.models.shared.ApproveAssignmentRequest request) {
        this.request = request;
        return this;
    }
}