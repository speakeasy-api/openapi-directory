package openapisdk.models.operations;



public class ListLanguageModelsResponse {
    public Object badRequestException;
    public ListLanguageModelsResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public ListLanguageModelsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListLanguageModelsResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object limitExceededException;
    public ListLanguageModelsResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ListLanguageModelsResponse listLanguageModelsResponse;
    public ListLanguageModelsResponse withListLanguageModelsResponse(openapisdk.models.shared.ListLanguageModelsResponse listLanguageModelsResponse) {
        this.listLanguageModelsResponse = listLanguageModelsResponse;
        return this;
    }
    public Long statusCode;
    public ListLanguageModelsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}