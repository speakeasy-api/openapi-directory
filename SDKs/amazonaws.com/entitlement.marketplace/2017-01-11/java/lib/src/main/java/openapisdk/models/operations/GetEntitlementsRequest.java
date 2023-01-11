package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEntitlementsRequest {
    public GetEntitlementsHeaders headers;
    public GetEntitlementsRequest withHeaders(GetEntitlementsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetEntitlementsRequest request;
    public GetEntitlementsRequest withRequest(openapisdk.models.shared.GetEntitlementsRequest request) {
        this.request = request;
        return this;
    }
}