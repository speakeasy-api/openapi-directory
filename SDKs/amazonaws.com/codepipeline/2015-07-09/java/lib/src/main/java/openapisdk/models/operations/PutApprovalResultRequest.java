package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutApprovalResultRequest {
    public PutApprovalResultHeaders headers;
    public PutApprovalResultRequest withHeaders(PutApprovalResultHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutApprovalResultInput request;
    public PutApprovalResultRequest withRequest(openapisdk.models.shared.PutApprovalResultInput request) {
        this.request = request;
        return this;
    }
}