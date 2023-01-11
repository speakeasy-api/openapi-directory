package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGroupRequest {
    public GetGroupHeaders headers;
    public GetGroupRequest withHeaders(GetGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetGroupRequest request;
    public GetGroupRequest withRequest(openapisdk.models.shared.GetGroupRequest request) {
        this.request = request;
        return this;
    }
}