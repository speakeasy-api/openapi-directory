package openapisdk.models.operations;



public class BatchDetectSyntaxResponse {
    public openapisdk.models.shared.BatchDetectSyntaxResponse batchDetectSyntaxResponse;
    public BatchDetectSyntaxResponse withBatchDetectSyntaxResponse(openapisdk.models.shared.BatchDetectSyntaxResponse batchDetectSyntaxResponse) {
        this.batchDetectSyntaxResponse = batchDetectSyntaxResponse;
        return this;
    }
    public Object batchSizeLimitExceededException;
    public BatchDetectSyntaxResponse withBatchSizeLimitExceededException(Object batchSizeLimitExceededException) {
        this.batchSizeLimitExceededException = batchSizeLimitExceededException;
        return this;
    }
    public String contentType;
    public BatchDetectSyntaxResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public BatchDetectSyntaxResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public BatchDetectSyntaxResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public BatchDetectSyntaxResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object textSizeLimitExceededException;
    public BatchDetectSyntaxResponse withTextSizeLimitExceededException(Object textSizeLimitExceededException) {
        this.textSizeLimitExceededException = textSizeLimitExceededException;
        return this;
    }
    public Object unsupportedLanguageException;
    public BatchDetectSyntaxResponse withUnsupportedLanguageException(Object unsupportedLanguageException) {
        this.unsupportedLanguageException = unsupportedLanguageException;
        return this;
    }
}