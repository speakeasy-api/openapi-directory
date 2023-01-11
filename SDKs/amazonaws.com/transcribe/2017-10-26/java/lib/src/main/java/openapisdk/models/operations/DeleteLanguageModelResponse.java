package openapisdk.models.operations;



public class DeleteLanguageModelResponse {
    public Object badRequestException;
    public DeleteLanguageModelResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public DeleteLanguageModelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public DeleteLanguageModelResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object limitExceededException;
    public DeleteLanguageModelResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Long statusCode;
    public DeleteLanguageModelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}