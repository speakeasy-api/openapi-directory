package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SyncConnectionRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ConnectionIdRequestBody request;
    public SyncConnectionRequest withRequest(openapisdk.models.shared.ConnectionIdRequestBody request) {
        this.request = request;
        return this;
    }
}