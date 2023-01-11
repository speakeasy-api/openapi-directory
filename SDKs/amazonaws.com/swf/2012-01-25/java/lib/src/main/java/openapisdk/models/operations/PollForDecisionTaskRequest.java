package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PollForDecisionTaskRequest {
    public PollForDecisionTaskQueryParams queryParams;
    public PollForDecisionTaskRequest withQueryParams(PollForDecisionTaskQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PollForDecisionTaskHeaders headers;
    public PollForDecisionTaskRequest withHeaders(PollForDecisionTaskHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PollForDecisionTaskInput request;
    public PollForDecisionTaskRequest withRequest(openapisdk.models.shared.PollForDecisionTaskInput request) {
        this.request = request;
        return this;
    }
}