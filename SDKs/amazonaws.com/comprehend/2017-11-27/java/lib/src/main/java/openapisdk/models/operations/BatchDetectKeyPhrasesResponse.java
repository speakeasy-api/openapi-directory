package openapisdk.models.operations;



public class BatchDetectKeyPhrasesResponse {
    public openapisdk.models.shared.BatchDetectKeyPhrasesResponse batchDetectKeyPhrasesResponse;
    public BatchDetectKeyPhrasesResponse withBatchDetectKeyPhrasesResponse(openapisdk.models.shared.BatchDetectKeyPhrasesResponse batchDetectKeyPhrasesResponse) {
        this.batchDetectKeyPhrasesResponse = batchDetectKeyPhrasesResponse;
        return this;
    }
    public Object batchSizeLimitExceededException;
    public BatchDetectKeyPhrasesResponse withBatchSizeLimitExceededException(Object batchSizeLimitExceededException) {
        this.batchSizeLimitExceededException = batchSizeLimitExceededException;
        return this;
    }
    public String contentType;
    public BatchDetectKeyPhrasesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public BatchDetectKeyPhrasesResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public BatchDetectKeyPhrasesResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public BatchDetectKeyPhrasesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object textSizeLimitExceededException;
    public BatchDetectKeyPhrasesResponse withTextSizeLimitExceededException(Object textSizeLimitExceededException) {
        this.textSizeLimitExceededException = textSizeLimitExceededException;
        return this;
    }
    public Object unsupportedLanguageException;
    public BatchDetectKeyPhrasesResponse withUnsupportedLanguageException(Object unsupportedLanguageException) {
        this.unsupportedLanguageException = unsupportedLanguageException;
        return this;
    }
}