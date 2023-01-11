package openapisdk.models.operations;



public class ListDatabasesResponse {
    public Object accessDeniedException;
    public ListDatabasesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListDatabasesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListDatabasesResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidEndpointException;
    public ListDatabasesResponse withInvalidEndpointException(Object invalidEndpointException) {
        this.invalidEndpointException = invalidEndpointException;
        return this;
    }
    public openapisdk.models.shared.ListDatabasesResponse listDatabasesResponse;
    public ListDatabasesResponse withListDatabasesResponse(openapisdk.models.shared.ListDatabasesResponse listDatabasesResponse) {
        this.listDatabasesResponse = listDatabasesResponse;
        return this;
    }
    public Long statusCode;
    public ListDatabasesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListDatabasesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListDatabasesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}