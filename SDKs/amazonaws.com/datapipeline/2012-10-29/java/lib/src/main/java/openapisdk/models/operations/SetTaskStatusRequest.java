package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetTaskStatusRequest {
    public SetTaskStatusHeaders headers;
    public SetTaskStatusRequest withHeaders(SetTaskStatusHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetTaskStatusInput request;
    public SetTaskStatusRequest withRequest(openapisdk.models.shared.SetTaskStatusInput request) {
        this.request = request;
        return this;
    }
}