package openapisdk.models.operations;



public class UpdateCoreDefinitionResponse {
    public Object badRequestException;
    public UpdateCoreDefinitionResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public UpdateCoreDefinitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateCoreDefinitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> updateCoreDefinitionResponse;
    public UpdateCoreDefinitionResponse withUpdateCoreDefinitionResponse(java.util.Map<String, Object> updateCoreDefinitionResponse) {
        this.updateCoreDefinitionResponse = updateCoreDefinitionResponse;
        return this;
    }
}