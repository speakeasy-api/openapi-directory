package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetConnectionRequest {
    public GetConnectionHeaders headers;
    public GetConnectionRequest withHeaders(GetConnectionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetConnectionInput request;
    public GetConnectionRequest withRequest(openapisdk.models.shared.GetConnectionInput request) {
        this.request = request;
        return this;
    }
}