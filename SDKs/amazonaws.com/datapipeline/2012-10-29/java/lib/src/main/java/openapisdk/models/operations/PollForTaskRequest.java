package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PollForTaskRequest {
    public PollForTaskHeaders headers;
    public PollForTaskRequest withHeaders(PollForTaskHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PollForTaskInput request;
    public PollForTaskRequest withRequest(openapisdk.models.shared.PollForTaskInput request) {
        this.request = request;
        return this;
    }
}