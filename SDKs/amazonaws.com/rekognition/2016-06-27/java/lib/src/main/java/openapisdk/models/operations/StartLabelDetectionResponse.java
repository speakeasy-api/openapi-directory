package openapisdk.models.operations;



public class StartLabelDetectionResponse {
    public Object accessDeniedException;
    public StartLabelDetectionResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public StartLabelDetectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object idempotentParameterMismatchException;
    public StartLabelDetectionResponse withIdempotentParameterMismatchException(Object idempotentParameterMismatchException) {
        this.idempotentParameterMismatchException = idempotentParameterMismatchException;
        return this;
    }
    public Object internalServerError;
    public StartLabelDetectionResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidParameterException;
    public StartLabelDetectionResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidS3ObjectException;
    public StartLabelDetectionResponse withInvalidS3ObjectException(Object invalidS3ObjectException) {
        this.invalidS3ObjectException = invalidS3ObjectException;
        return this;
    }
    public Object limitExceededException;
    public StartLabelDetectionResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object provisionedThroughputExceededException;
    public StartLabelDetectionResponse withProvisionedThroughputExceededException(Object provisionedThroughputExceededException) {
        this.provisionedThroughputExceededException = provisionedThroughputExceededException;
        return this;
    }
    public openapisdk.models.shared.StartLabelDetectionResponse startLabelDetectionResponse;
    public StartLabelDetectionResponse withStartLabelDetectionResponse(openapisdk.models.shared.StartLabelDetectionResponse startLabelDetectionResponse) {
        this.startLabelDetectionResponse = startLabelDetectionResponse;
        return this;
    }
    public Long statusCode;
    public StartLabelDetectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public StartLabelDetectionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object videoTooLargeException;
    public StartLabelDetectionResponse withVideoTooLargeException(Object videoTooLargeException) {
        this.videoTooLargeException = videoTooLargeException;
        return this;
    }
}