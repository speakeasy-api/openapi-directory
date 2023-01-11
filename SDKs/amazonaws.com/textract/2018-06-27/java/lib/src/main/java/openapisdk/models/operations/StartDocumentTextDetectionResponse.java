package openapisdk.models.operations;



public class StartDocumentTextDetectionResponse {
    public Object accessDeniedException;
    public StartDocumentTextDetectionResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object badDocumentException;
    public StartDocumentTextDetectionResponse withBadDocumentException(Object badDocumentException) {
        this.badDocumentException = badDocumentException;
        return this;
    }
    public String contentType;
    public StartDocumentTextDetectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object documentTooLargeException;
    public StartDocumentTextDetectionResponse withDocumentTooLargeException(Object documentTooLargeException) {
        this.documentTooLargeException = documentTooLargeException;
        return this;
    }
    public Object idempotentParameterMismatchException;
    public StartDocumentTextDetectionResponse withIdempotentParameterMismatchException(Object idempotentParameterMismatchException) {
        this.idempotentParameterMismatchException = idempotentParameterMismatchException;
        return this;
    }
    public Object internalServerError;
    public StartDocumentTextDetectionResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidKMSKeyException;
    public StartDocumentTextDetectionResponse withInvalidKmsKeyException(Object invalidKMSKeyException) {
        this.invalidKMSKeyException = invalidKMSKeyException;
        return this;
    }
    public Object invalidParameterException;
    public StartDocumentTextDetectionResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidS3ObjectException;
    public StartDocumentTextDetectionResponse withInvalidS3ObjectException(Object invalidS3ObjectException) {
        this.invalidS3ObjectException = invalidS3ObjectException;
        return this;
    }
    public Object limitExceededException;
    public StartDocumentTextDetectionResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object provisionedThroughputExceededException;
    public StartDocumentTextDetectionResponse withProvisionedThroughputExceededException(Object provisionedThroughputExceededException) {
        this.provisionedThroughputExceededException = provisionedThroughputExceededException;
        return this;
    }
    public openapisdk.models.shared.StartDocumentTextDetectionResponse startDocumentTextDetectionResponse;
    public StartDocumentTextDetectionResponse withStartDocumentTextDetectionResponse(openapisdk.models.shared.StartDocumentTextDetectionResponse startDocumentTextDetectionResponse) {
        this.startDocumentTextDetectionResponse = startDocumentTextDetectionResponse;
        return this;
    }
    public Long statusCode;
    public StartDocumentTextDetectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public StartDocumentTextDetectionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unsupportedDocumentException;
    public StartDocumentTextDetectionResponse withUnsupportedDocumentException(Object unsupportedDocumentException) {
        this.unsupportedDocumentException = unsupportedDocumentException;
        return this;
    }
}