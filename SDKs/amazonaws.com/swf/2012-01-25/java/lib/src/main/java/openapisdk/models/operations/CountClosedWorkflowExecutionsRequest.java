package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CountClosedWorkflowExecutionsRequest {
    public CountClosedWorkflowExecutionsHeaders headers;
    public CountClosedWorkflowExecutionsRequest withHeaders(CountClosedWorkflowExecutionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CountClosedWorkflowExecutionsInput request;
    public CountClosedWorkflowExecutionsRequest withRequest(openapisdk.models.shared.CountClosedWorkflowExecutionsInput request) {
        this.request = request;
        return this;
    }
}