package openapisdk.models.operations;



public class DeleteFunctionDefinitionResponse {
    public Object badRequestException;
    public DeleteFunctionDefinitionResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public DeleteFunctionDefinitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteFunctionDefinitionResponse;
    public DeleteFunctionDefinitionResponse withDeleteFunctionDefinitionResponse(java.util.Map<String, Object> deleteFunctionDefinitionResponse) {
        this.deleteFunctionDefinitionResponse = deleteFunctionDefinitionResponse;
        return this;
    }
    public Long statusCode;
    public DeleteFunctionDefinitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}