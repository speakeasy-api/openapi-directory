package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInstanceStateRequest {
    public GetInstanceStateHeaders headers;
    public GetInstanceStateRequest withHeaders(GetInstanceStateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetInstanceStateRequest request;
    public GetInstanceStateRequest withRequest(openapisdk.models.shared.GetInstanceStateRequest request) {
        this.request = request;
        return this;
    }
}