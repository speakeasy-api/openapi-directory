package openapisdk.models.operations;



public class ListRecommendationsResponse {
    public Object accessDeniedException;
    public ListRecommendationsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListRecommendationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListRecommendationsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListRecommendationsResponse listRecommendationsResponse;
    public ListRecommendationsResponse withListRecommendationsResponse(openapisdk.models.shared.ListRecommendationsResponse listRecommendationsResponse) {
        this.listRecommendationsResponse = listRecommendationsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListRecommendationsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListRecommendationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListRecommendationsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListRecommendationsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}