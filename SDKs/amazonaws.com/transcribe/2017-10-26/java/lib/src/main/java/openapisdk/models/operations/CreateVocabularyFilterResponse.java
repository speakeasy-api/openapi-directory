package openapisdk.models.operations;



public class CreateVocabularyFilterResponse {
    public Object badRequestException;
    public CreateVocabularyFilterResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object conflictException;
    public CreateVocabularyFilterResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateVocabularyFilterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateVocabularyFilterResponse createVocabularyFilterResponse;
    public CreateVocabularyFilterResponse withCreateVocabularyFilterResponse(openapisdk.models.shared.CreateVocabularyFilterResponse createVocabularyFilterResponse) {
        this.createVocabularyFilterResponse = createVocabularyFilterResponse;
        return this;
    }
    public Object internalFailureException;
    public CreateVocabularyFilterResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object limitExceededException;
    public CreateVocabularyFilterResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Long statusCode;
    public CreateVocabularyFilterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}