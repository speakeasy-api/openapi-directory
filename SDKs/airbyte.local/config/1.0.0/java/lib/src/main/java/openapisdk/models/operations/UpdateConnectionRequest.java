package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateConnectionRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ConnectionUpdate request;
    public UpdateConnectionRequest withRequest(openapisdk.models.shared.ConnectionUpdate request) {
        this.request = request;
        return this;
    }
}