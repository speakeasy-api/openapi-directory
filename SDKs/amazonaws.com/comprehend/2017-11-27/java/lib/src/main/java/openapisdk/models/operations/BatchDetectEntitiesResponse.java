package openapisdk.models.operations;



public class BatchDetectEntitiesResponse {
    public openapisdk.models.shared.BatchDetectEntitiesResponse batchDetectEntitiesResponse;
    public BatchDetectEntitiesResponse withBatchDetectEntitiesResponse(openapisdk.models.shared.BatchDetectEntitiesResponse batchDetectEntitiesResponse) {
        this.batchDetectEntitiesResponse = batchDetectEntitiesResponse;
        return this;
    }
    public Object batchSizeLimitExceededException;
    public BatchDetectEntitiesResponse withBatchSizeLimitExceededException(Object batchSizeLimitExceededException) {
        this.batchSizeLimitExceededException = batchSizeLimitExceededException;
        return this;
    }
    public String contentType;
    public BatchDetectEntitiesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public BatchDetectEntitiesResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public BatchDetectEntitiesResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public BatchDetectEntitiesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object textSizeLimitExceededException;
    public BatchDetectEntitiesResponse withTextSizeLimitExceededException(Object textSizeLimitExceededException) {
        this.textSizeLimitExceededException = textSizeLimitExceededException;
        return this;
    }
    public Object unsupportedLanguageException;
    public BatchDetectEntitiesResponse withUnsupportedLanguageException(Object unsupportedLanguageException) {
        this.unsupportedLanguageException = unsupportedLanguageException;
        return this;
    }
}