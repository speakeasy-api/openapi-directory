package openapisdk.models.operations;



public class GetRecommendationsResponse {
    public String contentType;
    public GetRecommendationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetRecommendationsResponse getRecommendationsResponse;
    public GetRecommendationsResponse withGetRecommendationsResponse(openapisdk.models.shared.GetRecommendationsResponse getRecommendationsResponse) {
        this.getRecommendationsResponse = getRecommendationsResponse;
        return this;
    }
    public Object internalServerException;
    public GetRecommendationsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetRecommendationsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetRecommendationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetRecommendationsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetRecommendationsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}