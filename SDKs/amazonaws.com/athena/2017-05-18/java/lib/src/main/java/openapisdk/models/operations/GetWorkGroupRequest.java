package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWorkGroupRequest {
    public GetWorkGroupHeaders headers;
    public GetWorkGroupRequest withHeaders(GetWorkGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetWorkGroupInput request;
    public GetWorkGroupRequest withRequest(openapisdk.models.shared.GetWorkGroupInput request) {
        this.request = request;
        return this;
    }
}