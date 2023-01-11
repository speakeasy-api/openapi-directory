package openapisdk.models.operations;



public class UpdateConnectorDefinitionResponse {
    public Object badRequestException;
    public UpdateConnectorDefinitionResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public UpdateConnectorDefinitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateConnectorDefinitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> updateConnectorDefinitionResponse;
    public UpdateConnectorDefinitionResponse withUpdateConnectorDefinitionResponse(java.util.Map<String, Object> updateConnectorDefinitionResponse) {
        this.updateConnectorDefinitionResponse = updateConnectorDefinitionResponse;
        return this;
    }
}