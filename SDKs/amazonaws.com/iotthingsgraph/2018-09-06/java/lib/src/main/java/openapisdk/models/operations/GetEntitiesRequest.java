package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEntitiesRequest {
    public GetEntitiesHeaders headers;
    public GetEntitiesRequest withHeaders(GetEntitiesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetEntitiesRequest request;
    public GetEntitiesRequest withRequest(openapisdk.models.shared.GetEntitiesRequest request) {
        this.request = request;
        return this;
    }
}