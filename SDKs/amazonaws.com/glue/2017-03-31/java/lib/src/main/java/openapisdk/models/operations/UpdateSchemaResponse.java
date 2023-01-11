package openapisdk.models.operations;



public class UpdateSchemaResponse {
    public Object accessDeniedException;
    public UpdateSchemaResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object concurrentModificationException;
    public UpdateSchemaResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public UpdateSchemaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public UpdateSchemaResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object internalServiceException;
    public UpdateSchemaResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public UpdateSchemaResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Long statusCode;
    public UpdateSchemaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateSchemaResponse updateSchemaResponse;
    public UpdateSchemaResponse withUpdateSchemaResponse(openapisdk.models.shared.UpdateSchemaResponse updateSchemaResponse) {
        this.updateSchemaResponse = updateSchemaResponse;
        return this;
    }
}