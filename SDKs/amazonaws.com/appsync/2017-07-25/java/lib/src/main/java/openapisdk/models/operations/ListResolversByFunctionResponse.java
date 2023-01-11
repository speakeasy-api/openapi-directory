package openapisdk.models.operations;



public class ListResolversByFunctionResponse {
    public Object badRequestException;
    public ListResolversByFunctionResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public ListResolversByFunctionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListResolversByFunctionResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public openapisdk.models.shared.ListResolversByFunctionResponse listResolversByFunctionResponse;
    public ListResolversByFunctionResponse withListResolversByFunctionResponse(openapisdk.models.shared.ListResolversByFunctionResponse listResolversByFunctionResponse) {
        this.listResolversByFunctionResponse = listResolversByFunctionResponse;
        return this;
    }
    public Object notFoundException;
    public ListResolversByFunctionResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public ListResolversByFunctionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public ListResolversByFunctionResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}