package openapisdk.models.operations;



public class DeleteCallAnalyticsCategoryResponse {
    public Object badRequestException;
    public DeleteCallAnalyticsCategoryResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public DeleteCallAnalyticsCategoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteCallAnalyticsCategoryResponse;
    public DeleteCallAnalyticsCategoryResponse withDeleteCallAnalyticsCategoryResponse(java.util.Map<String, Object> deleteCallAnalyticsCategoryResponse) {
        this.deleteCallAnalyticsCategoryResponse = deleteCallAnalyticsCategoryResponse;
        return this;
    }
    public Object internalFailureException;
    public DeleteCallAnalyticsCategoryResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object limitExceededException;
    public DeleteCallAnalyticsCategoryResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public DeleteCallAnalyticsCategoryResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteCallAnalyticsCategoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}