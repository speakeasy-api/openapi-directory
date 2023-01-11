package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetConnectionRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ConnectionIdRequestBody request;
    public GetConnectionRequest withRequest(openapisdk.models.shared.ConnectionIdRequestBody request) {
        this.request = request;
        return this;
    }
}