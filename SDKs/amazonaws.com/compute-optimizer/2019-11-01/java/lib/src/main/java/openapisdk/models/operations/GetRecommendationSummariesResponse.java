package openapisdk.models.operations;



public class GetRecommendationSummariesResponse {
    public Object accessDeniedException;
    public GetRecommendationSummariesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetRecommendationSummariesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetRecommendationSummariesResponse getRecommendationSummariesResponse;
    public GetRecommendationSummariesResponse withGetRecommendationSummariesResponse(openapisdk.models.shared.GetRecommendationSummariesResponse getRecommendationSummariesResponse) {
        this.getRecommendationSummariesResponse = getRecommendationSummariesResponse;
        return this;
    }
    public Object internalServerException;
    public GetRecommendationSummariesResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidParameterValueException;
    public GetRecommendationSummariesResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object missingAuthenticationToken;
    public GetRecommendationSummariesResponse withMissingAuthenticationToken(Object missingAuthenticationToken) {
        this.missingAuthenticationToken = missingAuthenticationToken;
        return this;
    }
    public Object optInRequiredException;
    public GetRecommendationSummariesResponse withOptInRequiredException(Object optInRequiredException) {
        this.optInRequiredException = optInRequiredException;
        return this;
    }
    public Object serviceUnavailableException;
    public GetRecommendationSummariesResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public GetRecommendationSummariesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetRecommendationSummariesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}