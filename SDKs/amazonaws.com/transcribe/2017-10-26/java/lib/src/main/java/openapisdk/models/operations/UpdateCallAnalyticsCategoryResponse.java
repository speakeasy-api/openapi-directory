package openapisdk.models.operations;



public class UpdateCallAnalyticsCategoryResponse {
    public Object badRequestException;
    public UpdateCallAnalyticsCategoryResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object conflictException;
    public UpdateCallAnalyticsCategoryResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public UpdateCallAnalyticsCategoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public UpdateCallAnalyticsCategoryResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object limitExceededException;
    public UpdateCallAnalyticsCategoryResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public UpdateCallAnalyticsCategoryResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateCallAnalyticsCategoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateCallAnalyticsCategoryResponse updateCallAnalyticsCategoryResponse;
    public UpdateCallAnalyticsCategoryResponse withUpdateCallAnalyticsCategoryResponse(openapisdk.models.shared.UpdateCallAnalyticsCategoryResponse updateCallAnalyticsCategoryResponse) {
        this.updateCallAnalyticsCategoryResponse = updateCallAnalyticsCategoryResponse;
        return this;
    }
}