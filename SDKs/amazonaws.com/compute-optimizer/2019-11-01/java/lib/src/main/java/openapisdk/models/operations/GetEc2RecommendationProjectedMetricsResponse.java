package openapisdk.models.operations;



public class GetEc2RecommendationProjectedMetricsResponse {
    public Object accessDeniedException;
    public GetEc2RecommendationProjectedMetricsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetEc2RecommendationProjectedMetricsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetEc2RecommendationProjectedMetricsResponse getEc2RecommendationProjectedMetricsResponse;
    public GetEc2RecommendationProjectedMetricsResponse withGetEc2RecommendationProjectedMetricsResponse(openapisdk.models.shared.GetEc2RecommendationProjectedMetricsResponse getEc2RecommendationProjectedMetricsResponse) {
        this.getEc2RecommendationProjectedMetricsResponse = getEc2RecommendationProjectedMetricsResponse;
        return this;
    }
    public Object internalServerException;
    public GetEc2RecommendationProjectedMetricsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidParameterValueException;
    public GetEc2RecommendationProjectedMetricsResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object missingAuthenticationToken;
    public GetEc2RecommendationProjectedMetricsResponse withMissingAuthenticationToken(Object missingAuthenticationToken) {
        this.missingAuthenticationToken = missingAuthenticationToken;
        return this;
    }
    public Object optInRequiredException;
    public GetEc2RecommendationProjectedMetricsResponse withOptInRequiredException(Object optInRequiredException) {
        this.optInRequiredException = optInRequiredException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetEc2RecommendationProjectedMetricsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public GetEc2RecommendationProjectedMetricsResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public GetEc2RecommendationProjectedMetricsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetEc2RecommendationProjectedMetricsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}