package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetChangeTokenStatusRequest {
    public GetChangeTokenStatusHeaders headers;
    public GetChangeTokenStatusRequest withHeaders(GetChangeTokenStatusHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetChangeTokenStatusRequest request;
    public GetChangeTokenStatusRequest withRequest(openapisdk.models.shared.GetChangeTokenStatusRequest request) {
        this.request = request;
        return this;
    }
}