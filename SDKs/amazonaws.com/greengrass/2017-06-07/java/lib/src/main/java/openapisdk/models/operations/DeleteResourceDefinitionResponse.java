package openapisdk.models.operations;



public class DeleteResourceDefinitionResponse {
    public Object badRequestException;
    public DeleteResourceDefinitionResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public DeleteResourceDefinitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteResourceDefinitionResponse;
    public DeleteResourceDefinitionResponse withDeleteResourceDefinitionResponse(java.util.Map<String, Object> deleteResourceDefinitionResponse) {
        this.deleteResourceDefinitionResponse = deleteResourceDefinitionResponse;
        return this;
    }
    public Long statusCode;
    public DeleteResourceDefinitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}