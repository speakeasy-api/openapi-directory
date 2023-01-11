package openapisdk.models.operations;



public class CreateCallAnalyticsCategoryResponse {
    public Object badRequestException;
    public CreateCallAnalyticsCategoryResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object conflictException;
    public CreateCallAnalyticsCategoryResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateCallAnalyticsCategoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateCallAnalyticsCategoryResponse createCallAnalyticsCategoryResponse;
    public CreateCallAnalyticsCategoryResponse withCreateCallAnalyticsCategoryResponse(openapisdk.models.shared.CreateCallAnalyticsCategoryResponse createCallAnalyticsCategoryResponse) {
        this.createCallAnalyticsCategoryResponse = createCallAnalyticsCategoryResponse;
        return this;
    }
    public Object internalFailureException;
    public CreateCallAnalyticsCategoryResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object limitExceededException;
    public CreateCallAnalyticsCategoryResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Long statusCode;
    public CreateCallAnalyticsCategoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}