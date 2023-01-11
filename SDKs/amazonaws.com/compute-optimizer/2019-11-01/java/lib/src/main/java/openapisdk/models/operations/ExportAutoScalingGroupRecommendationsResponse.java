package openapisdk.models.operations;



public class ExportAutoScalingGroupRecommendationsResponse {
    public Object accessDeniedException;
    public ExportAutoScalingGroupRecommendationsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ExportAutoScalingGroupRecommendationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ExportAutoScalingGroupRecommendationsResponse exportAutoScalingGroupRecommendationsResponse;
    public ExportAutoScalingGroupRecommendationsResponse withExportAutoScalingGroupRecommendationsResponse(openapisdk.models.shared.ExportAutoScalingGroupRecommendationsResponse exportAutoScalingGroupRecommendationsResponse) {
        this.exportAutoScalingGroupRecommendationsResponse = exportAutoScalingGroupRecommendationsResponse;
        return this;
    }
    public Object internalServerException;
    public ExportAutoScalingGroupRecommendationsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidParameterValueException;
    public ExportAutoScalingGroupRecommendationsResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object limitExceededException;
    public ExportAutoScalingGroupRecommendationsResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object missingAuthenticationToken;
    public ExportAutoScalingGroupRecommendationsResponse withMissingAuthenticationToken(Object missingAuthenticationToken) {
        this.missingAuthenticationToken = missingAuthenticationToken;
        return this;
    }
    public Object optInRequiredException;
    public ExportAutoScalingGroupRecommendationsResponse withOptInRequiredException(Object optInRequiredException) {
        this.optInRequiredException = optInRequiredException;
        return this;
    }
    public Object serviceUnavailableException;
    public ExportAutoScalingGroupRecommendationsResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ExportAutoScalingGroupRecommendationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ExportAutoScalingGroupRecommendationsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}