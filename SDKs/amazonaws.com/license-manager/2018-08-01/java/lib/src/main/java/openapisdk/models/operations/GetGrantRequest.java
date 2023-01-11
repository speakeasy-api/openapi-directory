package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGrantRequest {
    public GetGrantHeaders headers;
    public GetGrantRequest withHeaders(GetGrantHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetGrantRequest request;
    public GetGrantRequest withRequest(openapisdk.models.shared.GetGrantRequest request) {
        this.request = request;
        return this;
    }
}