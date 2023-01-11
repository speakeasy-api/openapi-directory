package openapisdk.models.operations;



public class BatchDetectSentimentResponse {
    public openapisdk.models.shared.BatchDetectSentimentResponse batchDetectSentimentResponse;
    public BatchDetectSentimentResponse withBatchDetectSentimentResponse(openapisdk.models.shared.BatchDetectSentimentResponse batchDetectSentimentResponse) {
        this.batchDetectSentimentResponse = batchDetectSentimentResponse;
        return this;
    }
    public Object batchSizeLimitExceededException;
    public BatchDetectSentimentResponse withBatchSizeLimitExceededException(Object batchSizeLimitExceededException) {
        this.batchSizeLimitExceededException = batchSizeLimitExceededException;
        return this;
    }
    public String contentType;
    public BatchDetectSentimentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public BatchDetectSentimentResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public BatchDetectSentimentResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public BatchDetectSentimentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object textSizeLimitExceededException;
    public BatchDetectSentimentResponse withTextSizeLimitExceededException(Object textSizeLimitExceededException) {
        this.textSizeLimitExceededException = textSizeLimitExceededException;
        return this;
    }
    public Object unsupportedLanguageException;
    public BatchDetectSentimentResponse withUnsupportedLanguageException(Object unsupportedLanguageException) {
        this.unsupportedLanguageException = unsupportedLanguageException;
        return this;
    }
}