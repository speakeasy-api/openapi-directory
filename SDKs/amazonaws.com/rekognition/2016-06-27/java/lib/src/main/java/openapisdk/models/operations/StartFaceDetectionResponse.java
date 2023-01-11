package openapisdk.models.operations;



public class StartFaceDetectionResponse {
    public Object accessDeniedException;
    public StartFaceDetectionResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public StartFaceDetectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object idempotentParameterMismatchException;
    public StartFaceDetectionResponse withIdempotentParameterMismatchException(Object idempotentParameterMismatchException) {
        this.idempotentParameterMismatchException = idempotentParameterMismatchException;
        return this;
    }
    public Object internalServerError;
    public StartFaceDetectionResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidParameterException;
    public StartFaceDetectionResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidS3ObjectException;
    public StartFaceDetectionResponse withInvalidS3ObjectException(Object invalidS3ObjectException) {
        this.invalidS3ObjectException = invalidS3ObjectException;
        return this;
    }
    public Object limitExceededException;
    public StartFaceDetectionResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object provisionedThroughputExceededException;
    public StartFaceDetectionResponse withProvisionedThroughputExceededException(Object provisionedThroughputExceededException) {
        this.provisionedThroughputExceededException = provisionedThroughputExceededException;
        return this;
    }
    public openapisdk.models.shared.StartFaceDetectionResponse startFaceDetectionResponse;
    public StartFaceDetectionResponse withStartFaceDetectionResponse(openapisdk.models.shared.StartFaceDetectionResponse startFaceDetectionResponse) {
        this.startFaceDetectionResponse = startFaceDetectionResponse;
        return this;
    }
    public Long statusCode;
    public StartFaceDetectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public StartFaceDetectionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object videoTooLargeException;
    public StartFaceDetectionResponse withVideoTooLargeException(Object videoTooLargeException) {
        this.videoTooLargeException = videoTooLargeException;
        return this;
    }
}