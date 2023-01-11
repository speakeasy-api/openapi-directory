package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetActivityTaskRequest {
    public GetActivityTaskHeaders headers;
    public GetActivityTaskRequest withHeaders(GetActivityTaskHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetActivityTaskInput request;
    public GetActivityTaskRequest withRequest(openapisdk.models.shared.GetActivityTaskInput request) {
        this.request = request;
        return this;
    }
}