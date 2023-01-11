package openapisdk.models.operations;



public class StopTextTranslationJobResponse {
    public String contentType;
    public StopTextTranslationJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public StopTextTranslationJobResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public StopTextTranslationJobResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public StopTextTranslationJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StopTextTranslationJobResponse stopTextTranslationJobResponse;
    public StopTextTranslationJobResponse withStopTextTranslationJobResponse(openapisdk.models.shared.StopTextTranslationJobResponse stopTextTranslationJobResponse) {
        this.stopTextTranslationJobResponse = stopTextTranslationJobResponse;
        return this;
    }
    public Object tooManyRequestsException;
    public StopTextTranslationJobResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}