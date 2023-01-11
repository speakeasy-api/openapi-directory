package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RespondDecisionTaskCompletedRequest {
    public RespondDecisionTaskCompletedHeaders headers;
    public RespondDecisionTaskCompletedRequest withHeaders(RespondDecisionTaskCompletedHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RespondDecisionTaskCompletedInput request;
    public RespondDecisionTaskCompletedRequest withRequest(openapisdk.models.shared.RespondDecisionTaskCompletedInput request) {
        this.request = request;
        return this;
    }
}