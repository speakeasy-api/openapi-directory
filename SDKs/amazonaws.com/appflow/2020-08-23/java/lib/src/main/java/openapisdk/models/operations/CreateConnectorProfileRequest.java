package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateConnectorProfileRequest {
    public CreateConnectorProfileHeaders headers;
    public CreateConnectorProfileRequest withHeaders(CreateConnectorProfileHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateConnectorProfileRequestBody request;
    public CreateConnectorProfileRequest withRequest(CreateConnectorProfileRequestBody request) {
        this.request = request;
        return this;
    }
}