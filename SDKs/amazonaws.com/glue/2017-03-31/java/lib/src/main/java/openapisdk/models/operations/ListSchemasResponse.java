package openapisdk.models.operations;



public class ListSchemasResponse {
    public Object accessDeniedException;
    public ListSchemasResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListSchemasResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public ListSchemasResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object internalServiceException;
    public ListSchemasResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public ListSchemasResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public openapisdk.models.shared.ListSchemasResponse listSchemasResponse;
    public ListSchemasResponse withListSchemasResponse(openapisdk.models.shared.ListSchemasResponse listSchemasResponse) {
        this.listSchemasResponse = listSchemasResponse;
        return this;
    }
    public Long statusCode;
    public ListSchemasResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}