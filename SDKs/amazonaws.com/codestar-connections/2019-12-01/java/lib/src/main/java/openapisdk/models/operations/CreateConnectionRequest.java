package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateConnectionRequest {
    public CreateConnectionHeaders headers;
    public CreateConnectionRequest withHeaders(CreateConnectionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateConnectionInput request;
    public CreateConnectionRequest withRequest(openapisdk.models.shared.CreateConnectionInput request) {
        this.request = request;
        return this;
    }
}