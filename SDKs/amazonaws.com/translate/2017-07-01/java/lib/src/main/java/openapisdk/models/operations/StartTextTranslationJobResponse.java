package openapisdk.models.operations;



public class StartTextTranslationJobResponse {
    public String contentType;
    public StartTextTranslationJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public StartTextTranslationJobResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public StartTextTranslationJobResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public StartTextTranslationJobResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.StartTextTranslationJobResponse startTextTranslationJobResponse;
    public StartTextTranslationJobResponse withStartTextTranslationJobResponse(openapisdk.models.shared.StartTextTranslationJobResponse startTextTranslationJobResponse) {
        this.startTextTranslationJobResponse = startTextTranslationJobResponse;
        return this;
    }
    public Long statusCode;
    public StartTextTranslationJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public StartTextTranslationJobResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object unsupportedLanguagePairException;
    public StartTextTranslationJobResponse withUnsupportedLanguagePairException(Object unsupportedLanguagePairException) {
        this.unsupportedLanguagePairException = unsupportedLanguagePairException;
        return this;
    }
}