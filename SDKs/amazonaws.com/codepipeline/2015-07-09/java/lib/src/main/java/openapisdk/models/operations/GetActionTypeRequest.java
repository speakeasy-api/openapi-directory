package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetActionTypeRequest {
    public GetActionTypeHeaders headers;
    public GetActionTypeRequest withHeaders(GetActionTypeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetActionTypeInput request;
    public GetActionTypeRequest withRequest(openapisdk.models.shared.GetActionTypeInput request) {
        this.request = request;
        return this;
    }
}