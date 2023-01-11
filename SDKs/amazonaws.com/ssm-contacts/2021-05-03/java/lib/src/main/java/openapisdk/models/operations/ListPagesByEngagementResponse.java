package openapisdk.models.operations;



public class ListPagesByEngagementResponse {
    public Object accessDeniedException;
    public ListPagesByEngagementResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListPagesByEngagementResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListPagesByEngagementResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListPagesByEngagementResult listPagesByEngagementResult;
    public ListPagesByEngagementResponse withListPagesByEngagementResult(openapisdk.models.shared.ListPagesByEngagementResult listPagesByEngagementResult) {
        this.listPagesByEngagementResult = listPagesByEngagementResult;
        return this;
    }
    public Object resourceNotFoundException;
    public ListPagesByEngagementResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListPagesByEngagementResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListPagesByEngagementResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListPagesByEngagementResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}