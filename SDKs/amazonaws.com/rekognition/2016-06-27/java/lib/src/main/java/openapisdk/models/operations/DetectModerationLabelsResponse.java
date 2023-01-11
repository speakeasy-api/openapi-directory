package openapisdk.models.operations;



public class DetectModerationLabelsResponse {
    public Object accessDeniedException;
    public DetectModerationLabelsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DetectModerationLabelsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DetectModerationLabelsResponse detectModerationLabelsResponse;
    public DetectModerationLabelsResponse withDetectModerationLabelsResponse(openapisdk.models.shared.DetectModerationLabelsResponse detectModerationLabelsResponse) {
        this.detectModerationLabelsResponse = detectModerationLabelsResponse;
        return this;
    }
    public Object humanLoopQuotaExceededException;
    public DetectModerationLabelsResponse withHumanLoopQuotaExceededException(Object humanLoopQuotaExceededException) {
        this.humanLoopQuotaExceededException = humanLoopQuotaExceededException;
        return this;
    }
    public Object imageTooLargeException;
    public DetectModerationLabelsResponse withImageTooLargeException(Object imageTooLargeException) {
        this.imageTooLargeException = imageTooLargeException;
        return this;
    }
    public Object internalServerError;
    public DetectModerationLabelsResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidImageFormatException;
    public DetectModerationLabelsResponse withInvalidImageFormatException(Object invalidImageFormatException) {
        this.invalidImageFormatException = invalidImageFormatException;
        return this;
    }
    public Object invalidParameterException;
    public DetectModerationLabelsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidS3ObjectException;
    public DetectModerationLabelsResponse withInvalidS3ObjectException(Object invalidS3ObjectException) {
        this.invalidS3ObjectException = invalidS3ObjectException;
        return this;
    }
    public Object provisionedThroughputExceededException;
    public DetectModerationLabelsResponse withProvisionedThroughputExceededException(Object provisionedThroughputExceededException) {
        this.provisionedThroughputExceededException = provisionedThroughputExceededException;
        return this;
    }
    public Long statusCode;
    public DetectModerationLabelsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DetectModerationLabelsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}