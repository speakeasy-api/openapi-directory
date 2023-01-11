package openapisdk.models.operations;



public class DeleteConnectorDefinitionResponse {
    public Object badRequestException;
    public DeleteConnectorDefinitionResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public DeleteConnectorDefinitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteConnectorDefinitionResponse;
    public DeleteConnectorDefinitionResponse withDeleteConnectorDefinitionResponse(java.util.Map<String, Object> deleteConnectorDefinitionResponse) {
        this.deleteConnectorDefinitionResponse = deleteConnectorDefinitionResponse;
        return this;
    }
    public Long statusCode;
    public DeleteConnectorDefinitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}