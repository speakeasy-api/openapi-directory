package openapisdk.models.operations;



public class ListFunctionsResponse {
    public Object badRequestException;
    public ListFunctionsResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public ListFunctionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListFunctionsResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public openapisdk.models.shared.ListFunctionsResponse listFunctionsResponse;
    public ListFunctionsResponse withListFunctionsResponse(openapisdk.models.shared.ListFunctionsResponse listFunctionsResponse) {
        this.listFunctionsResponse = listFunctionsResponse;
        return this;
    }
    public Object notFoundException;
    public ListFunctionsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public ListFunctionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public ListFunctionsResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}