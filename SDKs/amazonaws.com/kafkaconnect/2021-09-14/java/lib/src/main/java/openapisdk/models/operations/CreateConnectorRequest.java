package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateConnectorRequest {
    public CreateConnectorHeaders headers;
    public CreateConnectorRequest withHeaders(CreateConnectorHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateConnectorRequestBody request;
    public CreateConnectorRequest withRequest(CreateConnectorRequestBody request) {
        this.request = request;
        return this;
    }
}