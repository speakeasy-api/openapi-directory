package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartRemediationExecutionRequest {
    public StartRemediationExecutionHeaders headers;
    public StartRemediationExecutionRequest withHeaders(StartRemediationExecutionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartRemediationExecutionRequest request;
    public StartRemediationExecutionRequest withRequest(openapisdk.models.shared.StartRemediationExecutionRequest request) {
        this.request = request;
        return this;
    }
}