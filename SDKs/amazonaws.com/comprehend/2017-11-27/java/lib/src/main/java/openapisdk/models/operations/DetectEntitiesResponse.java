package openapisdk.models.operations;



public class DetectEntitiesResponse {
    public String contentType;
    public DetectEntitiesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DetectEntitiesResponse detectEntitiesResponse;
    public DetectEntitiesResponse withDetectEntitiesResponse(openapisdk.models.shared.DetectEntitiesResponse detectEntitiesResponse) {
        this.detectEntitiesResponse = detectEntitiesResponse;
        return this;
    }
    public Object internalServerException;
    public DetectEntitiesResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public DetectEntitiesResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceUnavailableException;
    public DetectEntitiesResponse withResourceUnavailableException(Object resourceUnavailableException) {
        this.resourceUnavailableException = resourceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DetectEntitiesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object textSizeLimitExceededException;
    public DetectEntitiesResponse withTextSizeLimitExceededException(Object textSizeLimitExceededException) {
        this.textSizeLimitExceededException = textSizeLimitExceededException;
        return this;
    }
    public Object unsupportedLanguageException;
    public DetectEntitiesResponse withUnsupportedLanguageException(Object unsupportedLanguageException) {
        this.unsupportedLanguageException = unsupportedLanguageException;
        return this;
    }
}