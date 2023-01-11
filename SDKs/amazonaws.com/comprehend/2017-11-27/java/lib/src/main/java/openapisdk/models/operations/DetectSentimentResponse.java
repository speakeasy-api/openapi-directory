package openapisdk.models.operations;



public class DetectSentimentResponse {
    public String contentType;
    public DetectSentimentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DetectSentimentResponse detectSentimentResponse;
    public DetectSentimentResponse withDetectSentimentResponse(openapisdk.models.shared.DetectSentimentResponse detectSentimentResponse) {
        this.detectSentimentResponse = detectSentimentResponse;
        return this;
    }
    public Object internalServerException;
    public DetectSentimentResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public DetectSentimentResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public DetectSentimentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object textSizeLimitExceededException;
    public DetectSentimentResponse withTextSizeLimitExceededException(Object textSizeLimitExceededException) {
        this.textSizeLimitExceededException = textSizeLimitExceededException;
        return this;
    }
    public Object unsupportedLanguageException;
    public DetectSentimentResponse withUnsupportedLanguageException(Object unsupportedLanguageException) {
        this.unsupportedLanguageException = unsupportedLanguageException;
        return this;
    }
}