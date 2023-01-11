package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ConnectionIdRequestBody request;
    public GetStateRequest withRequest(openapisdk.models.shared.ConnectionIdRequestBody request) {
        this.request = request;
        return this;
    }
}