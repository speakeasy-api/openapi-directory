package openapisdk.models.operations;



public class AnalyzeDocumentResponse {
    public Object accessDeniedException;
    public AnalyzeDocumentResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public openapisdk.models.shared.AnalyzeDocumentResponse analyzeDocumentResponse;
    public AnalyzeDocumentResponse withAnalyzeDocumentResponse(openapisdk.models.shared.AnalyzeDocumentResponse analyzeDocumentResponse) {
        this.analyzeDocumentResponse = analyzeDocumentResponse;
        return this;
    }
    public Object badDocumentException;
    public AnalyzeDocumentResponse withBadDocumentException(Object badDocumentException) {
        this.badDocumentException = badDocumentException;
        return this;
    }
    public String contentType;
    public AnalyzeDocumentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object documentTooLargeException;
    public AnalyzeDocumentResponse withDocumentTooLargeException(Object documentTooLargeException) {
        this.documentTooLargeException = documentTooLargeException;
        return this;
    }
    public Object humanLoopQuotaExceededException;
    public AnalyzeDocumentResponse withHumanLoopQuotaExceededException(Object humanLoopQuotaExceededException) {
        this.humanLoopQuotaExceededException = humanLoopQuotaExceededException;
        return this;
    }
    public Object internalServerError;
    public AnalyzeDocumentResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidParameterException;
    public AnalyzeDocumentResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidS3ObjectException;
    public AnalyzeDocumentResponse withInvalidS3ObjectException(Object invalidS3ObjectException) {
        this.invalidS3ObjectException = invalidS3ObjectException;
        return this;
    }
    public Object provisionedThroughputExceededException;
    public AnalyzeDocumentResponse withProvisionedThroughputExceededException(Object provisionedThroughputExceededException) {
        this.provisionedThroughputExceededException = provisionedThroughputExceededException;
        return this;
    }
    public Long statusCode;
    public AnalyzeDocumentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public AnalyzeDocumentResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unsupportedDocumentException;
    public AnalyzeDocumentResponse withUnsupportedDocumentException(Object unsupportedDocumentException) {
        this.unsupportedDocumentException = unsupportedDocumentException;
        return this;
    }
}