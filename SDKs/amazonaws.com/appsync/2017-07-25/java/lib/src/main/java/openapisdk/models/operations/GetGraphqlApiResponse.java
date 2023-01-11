package openapisdk.models.operations;



public class GetGraphqlApiResponse {
    public Object accessDeniedException;
    public GetGraphqlApiResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object badRequestException;
    public GetGraphqlApiResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetGraphqlApiResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetGraphqlApiResponse getGraphqlApiResponse;
    public GetGraphqlApiResponse withGetGraphqlApiResponse(openapisdk.models.shared.GetGraphqlApiResponse getGraphqlApiResponse) {
        this.getGraphqlApiResponse = getGraphqlApiResponse;
        return this;
    }
    public Object internalFailureException;
    public GetGraphqlApiResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object notFoundException;
    public GetGraphqlApiResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetGraphqlApiResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public GetGraphqlApiResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}