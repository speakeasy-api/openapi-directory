package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RespondActivityTaskCompletedRequest {
    public RespondActivityTaskCompletedHeaders headers;
    public RespondActivityTaskCompletedRequest withHeaders(RespondActivityTaskCompletedHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RespondActivityTaskCompletedInput request;
    public RespondActivityTaskCompletedRequest withRequest(openapisdk.models.shared.RespondActivityTaskCompletedInput request) {
        this.request = request;
        return this;
    }
}