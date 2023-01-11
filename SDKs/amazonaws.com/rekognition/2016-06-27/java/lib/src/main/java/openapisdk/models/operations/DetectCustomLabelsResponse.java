package openapisdk.models.operations;



public class DetectCustomLabelsResponse {
    public Object accessDeniedException;
    public DetectCustomLabelsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DetectCustomLabelsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DetectCustomLabelsResponse detectCustomLabelsResponse;
    public DetectCustomLabelsResponse withDetectCustomLabelsResponse(openapisdk.models.shared.DetectCustomLabelsResponse detectCustomLabelsResponse) {
        this.detectCustomLabelsResponse = detectCustomLabelsResponse;
        return this;
    }
    public Object imageTooLargeException;
    public DetectCustomLabelsResponse withImageTooLargeException(Object imageTooLargeException) {
        this.imageTooLargeException = imageTooLargeException;
        return this;
    }
    public Object internalServerError;
    public DetectCustomLabelsResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidImageFormatException;
    public DetectCustomLabelsResponse withInvalidImageFormatException(Object invalidImageFormatException) {
        this.invalidImageFormatException = invalidImageFormatException;
        return this;
    }
    public Object invalidParameterException;
    public DetectCustomLabelsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidS3ObjectException;
    public DetectCustomLabelsResponse withInvalidS3ObjectException(Object invalidS3ObjectException) {
        this.invalidS3ObjectException = invalidS3ObjectException;
        return this;
    }
    public Object limitExceededException;
    public DetectCustomLabelsResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object provisionedThroughputExceededException;
    public DetectCustomLabelsResponse withProvisionedThroughputExceededException(Object provisionedThroughputExceededException) {
        this.provisionedThroughputExceededException = provisionedThroughputExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public DetectCustomLabelsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object resourceNotReadyException;
    public DetectCustomLabelsResponse withResourceNotReadyException(Object resourceNotReadyException) {
        this.resourceNotReadyException = resourceNotReadyException;
        return this;
    }
    public Long statusCode;
    public DetectCustomLabelsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DetectCustomLabelsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}