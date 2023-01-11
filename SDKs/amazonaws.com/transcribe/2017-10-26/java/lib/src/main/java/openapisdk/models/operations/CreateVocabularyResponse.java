package openapisdk.models.operations;



public class CreateVocabularyResponse {
    public Object badRequestException;
    public CreateVocabularyResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object conflictException;
    public CreateVocabularyResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateVocabularyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateVocabularyResponse createVocabularyResponse;
    public CreateVocabularyResponse withCreateVocabularyResponse(openapisdk.models.shared.CreateVocabularyResponse createVocabularyResponse) {
        this.createVocabularyResponse = createVocabularyResponse;
        return this;
    }
    public Object internalFailureException;
    public CreateVocabularyResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object limitExceededException;
    public CreateVocabularyResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Long statusCode;
    public CreateVocabularyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}