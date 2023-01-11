package openapisdk.models.operations;



public class GetEc2InstanceRecommendationsResponse {
    public Object accessDeniedException;
    public GetEc2InstanceRecommendationsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetEc2InstanceRecommendationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetEc2InstanceRecommendationsResponse getEc2InstanceRecommendationsResponse;
    public GetEc2InstanceRecommendationsResponse withGetEc2InstanceRecommendationsResponse(openapisdk.models.shared.GetEc2InstanceRecommendationsResponse getEc2InstanceRecommendationsResponse) {
        this.getEc2InstanceRecommendationsResponse = getEc2InstanceRecommendationsResponse;
        return this;
    }
    public Object internalServerException;
    public GetEc2InstanceRecommendationsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidParameterValueException;
    public GetEc2InstanceRecommendationsResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object missingAuthenticationToken;
    public GetEc2InstanceRecommendationsResponse withMissingAuthenticationToken(Object missingAuthenticationToken) {
        this.missingAuthenticationToken = missingAuthenticationToken;
        return this;
    }
    public Object optInRequiredException;
    public GetEc2InstanceRecommendationsResponse withOptInRequiredException(Object optInRequiredException) {
        this.optInRequiredException = optInRequiredException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetEc2InstanceRecommendationsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public GetEc2InstanceRecommendationsResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public GetEc2InstanceRecommendationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetEc2InstanceRecommendationsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}