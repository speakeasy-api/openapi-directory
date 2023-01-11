package openapisdk.models.operations;



public class ListResolversResponse {
    public Object badRequestException;
    public ListResolversResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public ListResolversResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListResolversResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public openapisdk.models.shared.ListResolversResponse listResolversResponse;
    public ListResolversResponse withListResolversResponse(openapisdk.models.shared.ListResolversResponse listResolversResponse) {
        this.listResolversResponse = listResolversResponse;
        return this;
    }
    public Object notFoundException;
    public ListResolversResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public ListResolversResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public ListResolversResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}