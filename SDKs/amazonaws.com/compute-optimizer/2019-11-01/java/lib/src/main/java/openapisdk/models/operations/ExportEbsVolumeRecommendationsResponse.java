package openapisdk.models.operations;



public class ExportEbsVolumeRecommendationsResponse {
    public Object accessDeniedException;
    public ExportEbsVolumeRecommendationsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ExportEbsVolumeRecommendationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ExportEbsVolumeRecommendationsResponse exportEBSVolumeRecommendationsResponse;
    public ExportEbsVolumeRecommendationsResponse withExportEbsVolumeRecommendationsResponse(openapisdk.models.shared.ExportEbsVolumeRecommendationsResponse exportEBSVolumeRecommendationsResponse) {
        this.exportEBSVolumeRecommendationsResponse = exportEBSVolumeRecommendationsResponse;
        return this;
    }
    public Object internalServerException;
    public ExportEbsVolumeRecommendationsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidParameterValueException;
    public ExportEbsVolumeRecommendationsResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object limitExceededException;
    public ExportEbsVolumeRecommendationsResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object missingAuthenticationToken;
    public ExportEbsVolumeRecommendationsResponse withMissingAuthenticationToken(Object missingAuthenticationToken) {
        this.missingAuthenticationToken = missingAuthenticationToken;
        return this;
    }
    public Object optInRequiredException;
    public ExportEbsVolumeRecommendationsResponse withOptInRequiredException(Object optInRequiredException) {
        this.optInRequiredException = optInRequiredException;
        return this;
    }
    public Object serviceUnavailableException;
    public ExportEbsVolumeRecommendationsResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ExportEbsVolumeRecommendationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ExportEbsVolumeRecommendationsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}