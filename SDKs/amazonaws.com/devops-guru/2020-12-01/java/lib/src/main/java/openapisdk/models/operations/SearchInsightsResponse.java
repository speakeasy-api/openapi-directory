package openapisdk.models.operations;



public class SearchInsightsResponse {
    public Object accessDeniedException;
    public SearchInsightsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public SearchInsightsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public SearchInsightsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.SearchInsightsResponse searchInsightsResponse;
    public SearchInsightsResponse withSearchInsightsResponse(openapisdk.models.shared.SearchInsightsResponse searchInsightsResponse) {
        this.searchInsightsResponse = searchInsightsResponse;
        return this;
    }
    public Long statusCode;
    public SearchInsightsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public SearchInsightsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public SearchInsightsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}