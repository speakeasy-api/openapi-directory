package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTriggerRequest {
    public GetTriggerHeaders headers;
    public GetTriggerRequest withHeaders(GetTriggerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetTriggerRequest request;
    public GetTriggerRequest withRequest(openapisdk.models.shared.GetTriggerRequest request) {
        this.request = request;
        return this;
    }
}