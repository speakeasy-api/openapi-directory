package openapisdk.models.operations;



public class ListCallAnalyticsCategoriesResponse {
    public Object badRequestException;
    public ListCallAnalyticsCategoriesResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public ListCallAnalyticsCategoriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListCallAnalyticsCategoriesResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object limitExceededException;
    public ListCallAnalyticsCategoriesResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ListCallAnalyticsCategoriesResponse listCallAnalyticsCategoriesResponse;
    public ListCallAnalyticsCategoriesResponse withListCallAnalyticsCategoriesResponse(openapisdk.models.shared.ListCallAnalyticsCategoriesResponse listCallAnalyticsCategoriesResponse) {
        this.listCallAnalyticsCategoriesResponse = listCallAnalyticsCategoriesResponse;
        return this;
    }
    public Long statusCode;
    public ListCallAnalyticsCategoriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}