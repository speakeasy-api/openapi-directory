package openapisdk.models.operations;



public class TranslateTextResponse {
    public String contentType;
    public TranslateTextResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object detectedLanguageLowConfidenceException;
    public TranslateTextResponse withDetectedLanguageLowConfidenceException(Object detectedLanguageLowConfidenceException) {
        this.detectedLanguageLowConfidenceException = detectedLanguageLowConfidenceException;
        return this;
    }
    public Object internalServerException;
    public TranslateTextResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public TranslateTextResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public TranslateTextResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public TranslateTextResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public TranslateTextResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object textSizeLimitExceededException;
    public TranslateTextResponse withTextSizeLimitExceededException(Object textSizeLimitExceededException) {
        this.textSizeLimitExceededException = textSizeLimitExceededException;
        return this;
    }
    public Object tooManyRequestsException;
    public TranslateTextResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public openapisdk.models.shared.TranslateTextResponse translateTextResponse;
    public TranslateTextResponse withTranslateTextResponse(openapisdk.models.shared.TranslateTextResponse translateTextResponse) {
        this.translateTextResponse = translateTextResponse;
        return this;
    }
    public Object unsupportedLanguagePairException;
    public TranslateTextResponse withUnsupportedLanguagePairException(Object unsupportedLanguagePairException) {
        this.unsupportedLanguagePairException = unsupportedLanguagePairException;
        return this;
    }
}