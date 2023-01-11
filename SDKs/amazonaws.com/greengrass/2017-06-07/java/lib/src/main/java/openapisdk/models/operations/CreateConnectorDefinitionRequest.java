package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateConnectorDefinitionRequest {
    public CreateConnectorDefinitionHeaders headers;
    public CreateConnectorDefinitionRequest withHeaders(CreateConnectorDefinitionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateConnectorDefinitionRequestBody request;
    public CreateConnectorDefinitionRequest withRequest(CreateConnectorDefinitionRequestBody request) {
        this.request = request;
        return this;
    }
}