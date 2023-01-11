package openapisdk.models.operations;



public class StartContentModerationResponse {
    public Object accessDeniedException;
    public StartContentModerationResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public StartContentModerationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object idempotentParameterMismatchException;
    public StartContentModerationResponse withIdempotentParameterMismatchException(Object idempotentParameterMismatchException) {
        this.idempotentParameterMismatchException = idempotentParameterMismatchException;
        return this;
    }
    public Object internalServerError;
    public StartContentModerationResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidParameterException;
    public StartContentModerationResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidS3ObjectException;
    public StartContentModerationResponse withInvalidS3ObjectException(Object invalidS3ObjectException) {
        this.invalidS3ObjectException = invalidS3ObjectException;
        return this;
    }
    public Object limitExceededException;
    public StartContentModerationResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object provisionedThroughputExceededException;
    public StartContentModerationResponse withProvisionedThroughputExceededException(Object provisionedThroughputExceededException) {
        this.provisionedThroughputExceededException = provisionedThroughputExceededException;
        return this;
    }
    public openapisdk.models.shared.StartContentModerationResponse startContentModerationResponse;
    public StartContentModerationResponse withStartContentModerationResponse(openapisdk.models.shared.StartContentModerationResponse startContentModerationResponse) {
        this.startContentModerationResponse = startContentModerationResponse;
        return this;
    }
    public Long statusCode;
    public StartContentModerationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public StartContentModerationResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object videoTooLargeException;
    public StartContentModerationResponse withVideoTooLargeException(Object videoTooLargeException) {
        this.videoTooLargeException = videoTooLargeException;
        return this;
    }
}