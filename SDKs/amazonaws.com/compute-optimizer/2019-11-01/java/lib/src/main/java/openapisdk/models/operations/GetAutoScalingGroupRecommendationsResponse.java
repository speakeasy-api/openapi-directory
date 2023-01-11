package openapisdk.models.operations;



public class GetAutoScalingGroupRecommendationsResponse {
    public Object accessDeniedException;
    public GetAutoScalingGroupRecommendationsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetAutoScalingGroupRecommendationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetAutoScalingGroupRecommendationsResponse getAutoScalingGroupRecommendationsResponse;
    public GetAutoScalingGroupRecommendationsResponse withGetAutoScalingGroupRecommendationsResponse(openapisdk.models.shared.GetAutoScalingGroupRecommendationsResponse getAutoScalingGroupRecommendationsResponse) {
        this.getAutoScalingGroupRecommendationsResponse = getAutoScalingGroupRecommendationsResponse;
        return this;
    }
    public Object internalServerException;
    public GetAutoScalingGroupRecommendationsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidParameterValueException;
    public GetAutoScalingGroupRecommendationsResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object missingAuthenticationToken;
    public GetAutoScalingGroupRecommendationsResponse withMissingAuthenticationToken(Object missingAuthenticationToken) {
        this.missingAuthenticationToken = missingAuthenticationToken;
        return this;
    }
    public Object optInRequiredException;
    public GetAutoScalingGroupRecommendationsResponse withOptInRequiredException(Object optInRequiredException) {
        this.optInRequiredException = optInRequiredException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetAutoScalingGroupRecommendationsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public GetAutoScalingGroupRecommendationsResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public GetAutoScalingGroupRecommendationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetAutoScalingGroupRecommendationsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}