package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SubmitContainerStateChangeRequest {
    public SubmitContainerStateChangeHeaders headers;
    public SubmitContainerStateChangeRequest withHeaders(SubmitContainerStateChangeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SubmitContainerStateChangeRequest request;
    public SubmitContainerStateChangeRequest withRequest(openapisdk.models.shared.SubmitContainerStateChangeRequest request) {
        this.request = request;
        return this;
    }
}