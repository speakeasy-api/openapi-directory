package openapisdk.models.operations;



public class BatchDetectDominantLanguageResponse {
    public openapisdk.models.shared.BatchDetectDominantLanguageResponse batchDetectDominantLanguageResponse;
    public BatchDetectDominantLanguageResponse withBatchDetectDominantLanguageResponse(openapisdk.models.shared.BatchDetectDominantLanguageResponse batchDetectDominantLanguageResponse) {
        this.batchDetectDominantLanguageResponse = batchDetectDominantLanguageResponse;
        return this;
    }
    public Object batchSizeLimitExceededException;
    public BatchDetectDominantLanguageResponse withBatchSizeLimitExceededException(Object batchSizeLimitExceededException) {
        this.batchSizeLimitExceededException = batchSizeLimitExceededException;
        return this;
    }
    public String contentType;
    public BatchDetectDominantLanguageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public BatchDetectDominantLanguageResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public BatchDetectDominantLanguageResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public BatchDetectDominantLanguageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object textSizeLimitExceededException;
    public BatchDetectDominantLanguageResponse withTextSizeLimitExceededException(Object textSizeLimitExceededException) {
        this.textSizeLimitExceededException = textSizeLimitExceededException;
        return this;
    }
}