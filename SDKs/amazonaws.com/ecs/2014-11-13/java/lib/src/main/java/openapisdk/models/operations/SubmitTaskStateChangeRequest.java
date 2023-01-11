package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SubmitTaskStateChangeRequest {
    public SubmitTaskStateChangeHeaders headers;
    public SubmitTaskStateChangeRequest withHeaders(SubmitTaskStateChangeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SubmitTaskStateChangeRequest request;
    public SubmitTaskStateChangeRequest withRequest(openapisdk.models.shared.SubmitTaskStateChangeRequest request) {
        this.request = request;
        return this;
    }
}