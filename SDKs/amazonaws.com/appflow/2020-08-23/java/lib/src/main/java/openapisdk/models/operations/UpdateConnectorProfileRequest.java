package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateConnectorProfileRequest {
    public UpdateConnectorProfileHeaders headers;
    public UpdateConnectorProfileRequest withHeaders(UpdateConnectorProfileHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateConnectorProfileRequestBody request;
    public UpdateConnectorProfileRequest withRequest(UpdateConnectorProfileRequestBody request) {
        this.request = request;
        return this;
    }
}