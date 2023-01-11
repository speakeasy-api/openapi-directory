package openapisdk.models.operations;



public class ListManagedSchemaArnsResponse {
    public Object accessDeniedException;
    public ListManagedSchemaArnsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListManagedSchemaArnsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public ListManagedSchemaArnsResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidArnException;
    public ListManagedSchemaArnsResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object invalidNextTokenException;
    public ListManagedSchemaArnsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public openapisdk.models.shared.ListManagedSchemaArnsResponse listManagedSchemaArnsResponse;
    public ListManagedSchemaArnsResponse withListManagedSchemaArnsResponse(openapisdk.models.shared.ListManagedSchemaArnsResponse listManagedSchemaArnsResponse) {
        this.listManagedSchemaArnsResponse = listManagedSchemaArnsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListManagedSchemaArnsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListManagedSchemaArnsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListManagedSchemaArnsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}