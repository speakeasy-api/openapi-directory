package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateConnectorDefinitionVersionRequest {
    public CreateConnectorDefinitionVersionPathParams pathParams;
    public CreateConnectorDefinitionVersionRequest withPathParams(CreateConnectorDefinitionVersionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateConnectorDefinitionVersionHeaders headers;
    public CreateConnectorDefinitionVersionRequest withHeaders(CreateConnectorDefinitionVersionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateConnectorDefinitionVersionRequestBody request;
    public CreateConnectorDefinitionVersionRequest withRequest(CreateConnectorDefinitionVersionRequestBody request) {
        this.request = request;
        return this;
    }
}