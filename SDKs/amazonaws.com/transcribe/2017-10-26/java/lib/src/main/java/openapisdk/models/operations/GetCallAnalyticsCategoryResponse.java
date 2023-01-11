package openapisdk.models.operations;



public class GetCallAnalyticsCategoryResponse {
    public Object badRequestException;
    public GetCallAnalyticsCategoryResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetCallAnalyticsCategoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetCallAnalyticsCategoryResponse getCallAnalyticsCategoryResponse;
    public GetCallAnalyticsCategoryResponse withGetCallAnalyticsCategoryResponse(openapisdk.models.shared.GetCallAnalyticsCategoryResponse getCallAnalyticsCategoryResponse) {
        this.getCallAnalyticsCategoryResponse = getCallAnalyticsCategoryResponse;
        return this;
    }
    public Object internalFailureException;
    public GetCallAnalyticsCategoryResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object limitExceededException;
    public GetCallAnalyticsCategoryResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public GetCallAnalyticsCategoryResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetCallAnalyticsCategoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}