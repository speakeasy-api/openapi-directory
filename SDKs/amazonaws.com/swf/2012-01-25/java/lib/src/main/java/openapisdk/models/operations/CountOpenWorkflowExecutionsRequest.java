package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CountOpenWorkflowExecutionsRequest {
    public CountOpenWorkflowExecutionsHeaders headers;
    public CountOpenWorkflowExecutionsRequest withHeaders(CountOpenWorkflowExecutionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CountOpenWorkflowExecutionsInput request;
    public CountOpenWorkflowExecutionsRequest withRequest(openapisdk.models.shared.CountOpenWorkflowExecutionsInput request) {
        this.request = request;
        return this;
    }
}