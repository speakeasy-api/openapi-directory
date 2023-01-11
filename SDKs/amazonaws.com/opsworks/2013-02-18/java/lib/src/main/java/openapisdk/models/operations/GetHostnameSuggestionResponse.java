package openapisdk.models.operations;



public class GetHostnameSuggestionResponse {
    public String contentType;
    public GetHostnameSuggestionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetHostnameSuggestionResult getHostnameSuggestionResult;
    public GetHostnameSuggestionResponse withGetHostnameSuggestionResult(openapisdk.models.shared.GetHostnameSuggestionResult getHostnameSuggestionResult) {
        this.getHostnameSuggestionResult = getHostnameSuggestionResult;
        return this;
    }
    public Object resourceNotFoundException;
    public GetHostnameSuggestionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetHostnameSuggestionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public GetHostnameSuggestionResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}