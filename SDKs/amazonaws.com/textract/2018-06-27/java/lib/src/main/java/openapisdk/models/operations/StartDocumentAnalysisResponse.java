package openapisdk.models.operations;



public class StartDocumentAnalysisResponse {
    public Object accessDeniedException;
    public StartDocumentAnalysisResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object badDocumentException;
    public StartDocumentAnalysisResponse withBadDocumentException(Object badDocumentException) {
        this.badDocumentException = badDocumentException;
        return this;
    }
    public String contentType;
    public StartDocumentAnalysisResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object documentTooLargeException;
    public StartDocumentAnalysisResponse withDocumentTooLargeException(Object documentTooLargeException) {
        this.documentTooLargeException = documentTooLargeException;
        return this;
    }
    public Object idempotentParameterMismatchException;
    public StartDocumentAnalysisResponse withIdempotentParameterMismatchException(Object idempotentParameterMismatchException) {
        this.idempotentParameterMismatchException = idempotentParameterMismatchException;
        return this;
    }
    public Object internalServerError;
    public StartDocumentAnalysisResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidKMSKeyException;
    public StartDocumentAnalysisResponse withInvalidKmsKeyException(Object invalidKMSKeyException) {
        this.invalidKMSKeyException = invalidKMSKeyException;
        return this;
    }
    public Object invalidParameterException;
    public StartDocumentAnalysisResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidS3ObjectException;
    public StartDocumentAnalysisResponse withInvalidS3ObjectException(Object invalidS3ObjectException) {
        this.invalidS3ObjectException = invalidS3ObjectException;
        return this;
    }
    public Object limitExceededException;
    public StartDocumentAnalysisResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object provisionedThroughputExceededException;
    public StartDocumentAnalysisResponse withProvisionedThroughputExceededException(Object provisionedThroughputExceededException) {
        this.provisionedThroughputExceededException = provisionedThroughputExceededException;
        return this;
    }
    public openapisdk.models.shared.StartDocumentAnalysisResponse startDocumentAnalysisResponse;
    public StartDocumentAnalysisResponse withStartDocumentAnalysisResponse(openapisdk.models.shared.StartDocumentAnalysisResponse startDocumentAnalysisResponse) {
        this.startDocumentAnalysisResponse = startDocumentAnalysisResponse;
        return this;
    }
    public Long statusCode;
    public StartDocumentAnalysisResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public StartDocumentAnalysisResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unsupportedDocumentException;
    public StartDocumentAnalysisResponse withUnsupportedDocumentException(Object unsupportedDocumentException) {
        this.unsupportedDocumentException = unsupportedDocumentException;
        return this;
    }
}