package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInstanceRequest {
    public GetInstanceHeaders headers;
    public GetInstanceRequest withHeaders(GetInstanceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetInstanceRequest request;
    public GetInstanceRequest withRequest(openapisdk.models.shared.GetInstanceRequest request) {
        this.request = request;
        return this;
    }
}