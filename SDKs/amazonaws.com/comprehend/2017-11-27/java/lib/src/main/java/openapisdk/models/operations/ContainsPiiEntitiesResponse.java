package openapisdk.models.operations;



public class ContainsPiiEntitiesResponse {
    public openapisdk.models.shared.ContainsPiiEntitiesResponse containsPiiEntitiesResponse;
    public ContainsPiiEntitiesResponse withContainsPiiEntitiesResponse(openapisdk.models.shared.ContainsPiiEntitiesResponse containsPiiEntitiesResponse) {
        this.containsPiiEntitiesResponse = containsPiiEntitiesResponse;
        return this;
    }
    public String contentType;
    public ContainsPiiEntitiesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ContainsPiiEntitiesResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public ContainsPiiEntitiesResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public ContainsPiiEntitiesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object textSizeLimitExceededException;
    public ContainsPiiEntitiesResponse withTextSizeLimitExceededException(Object textSizeLimitExceededException) {
        this.textSizeLimitExceededException = textSizeLimitExceededException;
        return this;
    }
    public Object unsupportedLanguageException;
    public ContainsPiiEntitiesResponse withUnsupportedLanguageException(Object unsupportedLanguageException) {
        this.unsupportedLanguageException = unsupportedLanguageException;
        return this;
    }
}