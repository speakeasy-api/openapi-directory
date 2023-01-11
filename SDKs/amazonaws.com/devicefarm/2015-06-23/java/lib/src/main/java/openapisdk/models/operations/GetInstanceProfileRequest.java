package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInstanceProfileRequest {
    public GetInstanceProfileHeaders headers;
    public GetInstanceProfileRequest withHeaders(GetInstanceProfileHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetInstanceProfileRequest request;
    public GetInstanceProfileRequest withRequest(openapisdk.models.shared.GetInstanceProfileRequest request) {
        this.request = request;
        return this;
    }
}