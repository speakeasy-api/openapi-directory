package openapisdk.models.operations;



public class CreateConnectorDefinitionVersionResponse {
    public Object badRequestException;
    public CreateConnectorDefinitionVersionResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public CreateConnectorDefinitionVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateConnectorDefinitionVersionResponse createConnectorDefinitionVersionResponse;
    public CreateConnectorDefinitionVersionResponse withCreateConnectorDefinitionVersionResponse(openapisdk.models.shared.CreateConnectorDefinitionVersionResponse createConnectorDefinitionVersionResponse) {
        this.createConnectorDefinitionVersionResponse = createConnectorDefinitionVersionResponse;
        return this;
    }
    public Long statusCode;
    public CreateConnectorDefinitionVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}