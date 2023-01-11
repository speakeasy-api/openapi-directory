package openapisdk.models.operations;



public class GetSchemaResponse {
    public Object accessDeniedException;
    public GetSchemaResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetSchemaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public GetSchemaResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public openapisdk.models.shared.GetSchemaResponse getSchemaResponse;
    public GetSchemaResponse withGetSchemaResponse(openapisdk.models.shared.GetSchemaResponse getSchemaResponse) {
        this.getSchemaResponse = getSchemaResponse;
        return this;
    }
    public Object internalServiceException;
    public GetSchemaResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public GetSchemaResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Long statusCode;
    public GetSchemaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}