package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAccountAssignmentRequest {
    public DeleteAccountAssignmentHeaders headers;
    public DeleteAccountAssignmentRequest withHeaders(DeleteAccountAssignmentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteAccountAssignmentRequest request;
    public DeleteAccountAssignmentRequest withRequest(openapisdk.models.shared.DeleteAccountAssignmentRequest request) {
        this.request = request;
        return this;
    }
}