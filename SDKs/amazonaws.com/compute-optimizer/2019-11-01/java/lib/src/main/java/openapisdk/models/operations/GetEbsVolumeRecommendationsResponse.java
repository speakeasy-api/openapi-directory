package openapisdk.models.operations;



public class GetEbsVolumeRecommendationsResponse {
    public Object accessDeniedException;
    public GetEbsVolumeRecommendationsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetEbsVolumeRecommendationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetEbsVolumeRecommendationsResponse getEBSVolumeRecommendationsResponse;
    public GetEbsVolumeRecommendationsResponse withGetEbsVolumeRecommendationsResponse(openapisdk.models.shared.GetEbsVolumeRecommendationsResponse getEBSVolumeRecommendationsResponse) {
        this.getEBSVolumeRecommendationsResponse = getEBSVolumeRecommendationsResponse;
        return this;
    }
    public Object internalServerException;
    public GetEbsVolumeRecommendationsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidParameterValueException;
    public GetEbsVolumeRecommendationsResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object missingAuthenticationToken;
    public GetEbsVolumeRecommendationsResponse withMissingAuthenticationToken(Object missingAuthenticationToken) {
        this.missingAuthenticationToken = missingAuthenticationToken;
        return this;
    }
    public Object optInRequiredException;
    public GetEbsVolumeRecommendationsResponse withOptInRequiredException(Object optInRequiredException) {
        this.optInRequiredException = optInRequiredException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetEbsVolumeRecommendationsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public GetEbsVolumeRecommendationsResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public GetEbsVolumeRecommendationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetEbsVolumeRecommendationsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}