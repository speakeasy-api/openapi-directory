package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PollForActivityTaskRequest {
    public PollForActivityTaskHeaders headers;
    public PollForActivityTaskRequest withHeaders(PollForActivityTaskHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PollForActivityTaskInput request;
    public PollForActivityTaskRequest withRequest(openapisdk.models.shared.PollForActivityTaskInput request) {
        this.request = request;
        return this;
    }
}