package openapisdk.models.operations;



public class UpdateResourceDefinitionResponse {
    public Object badRequestException;
    public UpdateResourceDefinitionResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public UpdateResourceDefinitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateResourceDefinitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> updateResourceDefinitionResponse;
    public UpdateResourceDefinitionResponse withUpdateResourceDefinitionResponse(java.util.Map<String, Object> updateResourceDefinitionResponse) {
        this.updateResourceDefinitionResponse = updateResourceDefinitionResponse;
        return this;
    }
}