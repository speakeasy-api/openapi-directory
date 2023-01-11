package openapisdk.models.operations;



public class ListTypesResponse {
    public Object badRequestException;
    public ListTypesResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object concurrentModificationException;
    public ListTypesResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public ListTypesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListTypesResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public openapisdk.models.shared.ListTypesResponse listTypesResponse;
    public ListTypesResponse withListTypesResponse(openapisdk.models.shared.ListTypesResponse listTypesResponse) {
        this.listTypesResponse = listTypesResponse;
        return this;
    }
    public Object notFoundException;
    public ListTypesResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public ListTypesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public ListTypesResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}