package openapisdk.models.operations;



public class DeleteCodeSigningConfigResponse {
    public String contentType;
    public DeleteCodeSigningConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteCodeSigningConfigResponse;
    public DeleteCodeSigningConfigResponse withDeleteCodeSigningConfigResponse(java.util.Map<String, Object> deleteCodeSigningConfigResponse) {
        this.deleteCodeSigningConfigResponse = deleteCodeSigningConfigResponse;
        return this;
    }
    public Object invalidParameterValueException;
    public DeleteCodeSigningConfigResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object resourceConflictException;
    public DeleteCodeSigningConfigResponse withResourceConflictException(Object resourceConflictException) {
        this.resourceConflictException = resourceConflictException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteCodeSigningConfigResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceException;
    public DeleteCodeSigningConfigResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public DeleteCodeSigningConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}