package openapisdk.models.operations;



public class ExportEc2InstanceRecommendationsResponse {
    public Object accessDeniedException;
    public ExportEc2InstanceRecommendationsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ExportEc2InstanceRecommendationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ExportEc2InstanceRecommendationsResponse exportEc2InstanceRecommendationsResponse;
    public ExportEc2InstanceRecommendationsResponse withExportEc2InstanceRecommendationsResponse(openapisdk.models.shared.ExportEc2InstanceRecommendationsResponse exportEc2InstanceRecommendationsResponse) {
        this.exportEc2InstanceRecommendationsResponse = exportEc2InstanceRecommendationsResponse;
        return this;
    }
    public Object internalServerException;
    public ExportEc2InstanceRecommendationsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidParameterValueException;
    public ExportEc2InstanceRecommendationsResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object limitExceededException;
    public ExportEc2InstanceRecommendationsResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object missingAuthenticationToken;
    public ExportEc2InstanceRecommendationsResponse withMissingAuthenticationToken(Object missingAuthenticationToken) {
        this.missingAuthenticationToken = missingAuthenticationToken;
        return this;
    }
    public Object optInRequiredException;
    public ExportEc2InstanceRecommendationsResponse withOptInRequiredException(Object optInRequiredException) {
        this.optInRequiredException = optInRequiredException;
        return this;
    }
    public Object serviceUnavailableException;
    public ExportEc2InstanceRecommendationsResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ExportEc2InstanceRecommendationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ExportEc2InstanceRecommendationsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}