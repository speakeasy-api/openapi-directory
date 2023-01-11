package openapisdk.models.operations;



public class ListSchemaVersionsResponse {
    public Object accessDeniedException;
    public ListSchemaVersionsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListSchemaVersionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public ListSchemaVersionsResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object internalServiceException;
    public ListSchemaVersionsResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public ListSchemaVersionsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public openapisdk.models.shared.ListSchemaVersionsResponse listSchemaVersionsResponse;
    public ListSchemaVersionsResponse withListSchemaVersionsResponse(openapisdk.models.shared.ListSchemaVersionsResponse listSchemaVersionsResponse) {
        this.listSchemaVersionsResponse = listSchemaVersionsResponse;
        return this;
    }
    public Long statusCode;
    public ListSchemaVersionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}