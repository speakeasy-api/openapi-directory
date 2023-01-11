package openapisdk.models.operations;



public class AnalyzeExpenseResponse {
    public Object accessDeniedException;
    public AnalyzeExpenseResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public openapisdk.models.shared.AnalyzeExpenseResponse analyzeExpenseResponse;
    public AnalyzeExpenseResponse withAnalyzeExpenseResponse(openapisdk.models.shared.AnalyzeExpenseResponse analyzeExpenseResponse) {
        this.analyzeExpenseResponse = analyzeExpenseResponse;
        return this;
    }
    public Object badDocumentException;
    public AnalyzeExpenseResponse withBadDocumentException(Object badDocumentException) {
        this.badDocumentException = badDocumentException;
        return this;
    }
    public String contentType;
    public AnalyzeExpenseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object documentTooLargeException;
    public AnalyzeExpenseResponse withDocumentTooLargeException(Object documentTooLargeException) {
        this.documentTooLargeException = documentTooLargeException;
        return this;
    }
    public Object internalServerError;
    public AnalyzeExpenseResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidParameterException;
    public AnalyzeExpenseResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidS3ObjectException;
    public AnalyzeExpenseResponse withInvalidS3ObjectException(Object invalidS3ObjectException) {
        this.invalidS3ObjectException = invalidS3ObjectException;
        return this;
    }
    public Object provisionedThroughputExceededException;
    public AnalyzeExpenseResponse withProvisionedThroughputExceededException(Object provisionedThroughputExceededException) {
        this.provisionedThroughputExceededException = provisionedThroughputExceededException;
        return this;
    }
    public Long statusCode;
    public AnalyzeExpenseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public AnalyzeExpenseResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unsupportedDocumentException;
    public AnalyzeExpenseResponse withUnsupportedDocumentException(Object unsupportedDocumentException) {
        this.unsupportedDocumentException = unsupportedDocumentException;
        return this;
    }
}