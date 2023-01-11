package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RespondActivityTaskFailedRequest {
    public RespondActivityTaskFailedHeaders headers;
    public RespondActivityTaskFailedRequest withHeaders(RespondActivityTaskFailedHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RespondActivityTaskFailedInput request;
    public RespondActivityTaskFailedRequest withRequest(openapisdk.models.shared.RespondActivityTaskFailedInput request) {
        this.request = request;
        return this;
    }
}