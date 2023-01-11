package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RespondActivityTaskCanceledRequest {
    public RespondActivityTaskCanceledHeaders headers;
    public RespondActivityTaskCanceledRequest withHeaders(RespondActivityTaskCanceledHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RespondActivityTaskCanceledInput request;
    public RespondActivityTaskCanceledRequest withRequest(openapisdk.models.shared.RespondActivityTaskCanceledInput request) {
        this.request = request;
        return this;
    }
}