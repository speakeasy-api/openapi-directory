package openapisdk.models.operations;



public class StartSegmentDetectionResponse {
    public Object accessDeniedException;
    public StartSegmentDetectionResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public StartSegmentDetectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object idempotentParameterMismatchException;
    public StartSegmentDetectionResponse withIdempotentParameterMismatchException(Object idempotentParameterMismatchException) {
        this.idempotentParameterMismatchException = idempotentParameterMismatchException;
        return this;
    }
    public Object internalServerError;
    public StartSegmentDetectionResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidParameterException;
    public StartSegmentDetectionResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidS3ObjectException;
    public StartSegmentDetectionResponse withInvalidS3ObjectException(Object invalidS3ObjectException) {
        this.invalidS3ObjectException = invalidS3ObjectException;
        return this;
    }
    public Object limitExceededException;
    public StartSegmentDetectionResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object provisionedThroughputExceededException;
    public StartSegmentDetectionResponse withProvisionedThroughputExceededException(Object provisionedThroughputExceededException) {
        this.provisionedThroughputExceededException = provisionedThroughputExceededException;
        return this;
    }
    public openapisdk.models.shared.StartSegmentDetectionResponse startSegmentDetectionResponse;
    public StartSegmentDetectionResponse withStartSegmentDetectionResponse(openapisdk.models.shared.StartSegmentDetectionResponse startSegmentDetectionResponse) {
        this.startSegmentDetectionResponse = startSegmentDetectionResponse;
        return this;
    }
    public Long statusCode;
    public StartSegmentDetectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public StartSegmentDetectionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object videoTooLargeException;
    public StartSegmentDetectionResponse withVideoTooLargeException(Object videoTooLargeException) {
        this.videoTooLargeException = videoTooLargeException;
        return this;
    }
}