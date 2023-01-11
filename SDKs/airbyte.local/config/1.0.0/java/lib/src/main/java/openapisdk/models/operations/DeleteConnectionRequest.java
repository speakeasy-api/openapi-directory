package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteConnectionRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ConnectionIdRequestBody request;
    public DeleteConnectionRequest withRequest(openapisdk.models.shared.ConnectionIdRequestBody request) {
        this.request = request;
        return this;
    }
}