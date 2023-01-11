package openapisdk.models.operations;



public class DetectPiiEntitiesResponse {
    public String contentType;
    public DetectPiiEntitiesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DetectPiiEntitiesResponse detectPiiEntitiesResponse;
    public DetectPiiEntitiesResponse withDetectPiiEntitiesResponse(openapisdk.models.shared.DetectPiiEntitiesResponse detectPiiEntitiesResponse) {
        this.detectPiiEntitiesResponse = detectPiiEntitiesResponse;
        return this;
    }
    public Object internalServerException;
    public DetectPiiEntitiesResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public DetectPiiEntitiesResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public DetectPiiEntitiesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object textSizeLimitExceededException;
    public DetectPiiEntitiesResponse withTextSizeLimitExceededException(Object textSizeLimitExceededException) {
        this.textSizeLimitExceededException = textSizeLimitExceededException;
        return this;
    }
    public Object unsupportedLanguageException;
    public DetectPiiEntitiesResponse withUnsupportedLanguageException(Object unsupportedLanguageException) {
        this.unsupportedLanguageException = unsupportedLanguageException;
        return this;
    }
}