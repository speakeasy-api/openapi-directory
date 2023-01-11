package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteRemediationExceptionsRequest {
    public DeleteRemediationExceptionsHeaders headers;
    public DeleteRemediationExceptionsRequest withHeaders(DeleteRemediationExceptionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteRemediationExceptionsRequest request;
    public DeleteRemediationExceptionsRequest withRequest(openapisdk.models.shared.DeleteRemediationExceptionsRequest request) {
        this.request = request;
        return this;
    }
}