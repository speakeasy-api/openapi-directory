package openapisdk.models.operations;



public class UpdateFunctionDefinitionResponse {
    public Object badRequestException;
    public UpdateFunctionDefinitionResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public UpdateFunctionDefinitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateFunctionDefinitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> updateFunctionDefinitionResponse;
    public UpdateFunctionDefinitionResponse withUpdateFunctionDefinitionResponse(java.util.Map<String, Object> updateFunctionDefinitionResponse) {
        this.updateFunctionDefinitionResponse = updateFunctionDefinitionResponse;
        return this;
    }
}