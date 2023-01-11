package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CountPendingDecisionTasksRequest {
    public CountPendingDecisionTasksHeaders headers;
    public CountPendingDecisionTasksRequest withHeaders(CountPendingDecisionTasksHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CountPendingDecisionTasksInput request;
    public CountPendingDecisionTasksRequest withRequest(openapisdk.models.shared.CountPendingDecisionTasksInput request) {
        this.request = request;
        return this;
    }
}