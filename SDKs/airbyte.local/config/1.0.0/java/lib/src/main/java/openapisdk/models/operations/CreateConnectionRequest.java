package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateConnectionRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ConnectionCreate request;
    public CreateConnectionRequest withRequest(openapisdk.models.shared.ConnectionCreate request) {
        this.request = request;
        return this;
    }
}