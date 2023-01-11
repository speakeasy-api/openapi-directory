package openapisdk.models.operations;



public class CreateLanguageModelResponse {
    public Object badRequestException;
    public CreateLanguageModelResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object conflictException;
    public CreateLanguageModelResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateLanguageModelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateLanguageModelResponse createLanguageModelResponse;
    public CreateLanguageModelResponse withCreateLanguageModelResponse(openapisdk.models.shared.CreateLanguageModelResponse createLanguageModelResponse) {
        this.createLanguageModelResponse = createLanguageModelResponse;
        return this;
    }
    public Object internalFailureException;
    public CreateLanguageModelResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object limitExceededException;
    public CreateLanguageModelResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Long statusCode;
    public CreateLanguageModelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}