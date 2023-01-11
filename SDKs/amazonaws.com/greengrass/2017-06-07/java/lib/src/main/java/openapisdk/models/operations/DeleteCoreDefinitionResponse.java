package openapisdk.models.operations;



public class DeleteCoreDefinitionResponse {
    public Object badRequestException;
    public DeleteCoreDefinitionResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public DeleteCoreDefinitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteCoreDefinitionResponse;
    public DeleteCoreDefinitionResponse withDeleteCoreDefinitionResponse(java.util.Map<String, Object> deleteCoreDefinitionResponse) {
        this.deleteCoreDefinitionResponse = deleteCoreDefinitionResponse;
        return this;
    }
    public Long statusCode;
    public DeleteCoreDefinitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}