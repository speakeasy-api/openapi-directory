package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutRemediationExceptionsRequest {
    public PutRemediationExceptionsHeaders headers;
    public PutRemediationExceptionsRequest withHeaders(PutRemediationExceptionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutRemediationExceptionsRequest request;
    public PutRemediationExceptionsRequest withRequest(openapisdk.models.shared.PutRemediationExceptionsRequest request) {
        this.request = request;
        return this;
    }
}