package openapisdk.models.operations;



public class GetSchemaVersionResponse {
    public Object accessDeniedException;
    public GetSchemaVersionResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetSchemaVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public GetSchemaVersionResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public openapisdk.models.shared.GetSchemaVersionResponse getSchemaVersionResponse;
    public GetSchemaVersionResponse withGetSchemaVersionResponse(openapisdk.models.shared.GetSchemaVersionResponse getSchemaVersionResponse) {
        this.getSchemaVersionResponse = getSchemaVersionResponse;
        return this;
    }
    public Object internalServiceException;
    public GetSchemaVersionResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public GetSchemaVersionResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Long statusCode;
    public GetSchemaVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}