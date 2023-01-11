package openapisdk.models.operations;



public class GetSchemaVersionsDiffResponse {
    public Object accessDeniedException;
    public GetSchemaVersionsDiffResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetSchemaVersionsDiffResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public GetSchemaVersionsDiffResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public openapisdk.models.shared.GetSchemaVersionsDiffResponse getSchemaVersionsDiffResponse;
    public GetSchemaVersionsDiffResponse withGetSchemaVersionsDiffResponse(openapisdk.models.shared.GetSchemaVersionsDiffResponse getSchemaVersionsDiffResponse) {
        this.getSchemaVersionsDiffResponse = getSchemaVersionsDiffResponse;
        return this;
    }
    public Object internalServiceException;
    public GetSchemaVersionsDiffResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public GetSchemaVersionsDiffResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Long statusCode;
    public GetSchemaVersionsDiffResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}