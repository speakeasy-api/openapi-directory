package openapisdk.models.operations;



public class CreateGraphqlApiResponse {
    public Object apiLimitExceededException;
    public CreateGraphqlApiResponse withApiLimitExceededException(Object apiLimitExceededException) {
        this.apiLimitExceededException = apiLimitExceededException;
        return this;
    }
    public Object badRequestException;
    public CreateGraphqlApiResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object concurrentModificationException;
    public CreateGraphqlApiResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public CreateGraphqlApiResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateGraphqlApiResponse createGraphqlApiResponse;
    public CreateGraphqlApiResponse withCreateGraphqlApiResponse(openapisdk.models.shared.CreateGraphqlApiResponse createGraphqlApiResponse) {
        this.createGraphqlApiResponse = createGraphqlApiResponse;
        return this;
    }
    public Object internalFailureException;
    public CreateGraphqlApiResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object limitExceededException;
    public CreateGraphqlApiResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Long statusCode;
    public CreateGraphqlApiResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public CreateGraphqlApiResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}