package openapisdk.models.operations;



public class DetectKeyPhrasesResponse {
    public String contentType;
    public DetectKeyPhrasesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DetectKeyPhrasesResponse detectKeyPhrasesResponse;
    public DetectKeyPhrasesResponse withDetectKeyPhrasesResponse(openapisdk.models.shared.DetectKeyPhrasesResponse detectKeyPhrasesResponse) {
        this.detectKeyPhrasesResponse = detectKeyPhrasesResponse;
        return this;
    }
    public Object internalServerException;
    public DetectKeyPhrasesResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public DetectKeyPhrasesResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public DetectKeyPhrasesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object textSizeLimitExceededException;
    public DetectKeyPhrasesResponse withTextSizeLimitExceededException(Object textSizeLimitExceededException) {
        this.textSizeLimitExceededException = textSizeLimitExceededException;
        return this;
    }
    public Object unsupportedLanguageException;
    public DetectKeyPhrasesResponse withUnsupportedLanguageException(Object unsupportedLanguageException) {
        this.unsupportedLanguageException = unsupportedLanguageException;
        return this;
    }
}