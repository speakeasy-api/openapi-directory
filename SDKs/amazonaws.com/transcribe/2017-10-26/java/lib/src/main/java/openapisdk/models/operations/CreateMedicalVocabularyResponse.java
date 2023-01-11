package openapisdk.models.operations;



public class CreateMedicalVocabularyResponse {
    public Object badRequestException;
    public CreateMedicalVocabularyResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object conflictException;
    public CreateMedicalVocabularyResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateMedicalVocabularyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateMedicalVocabularyResponse createMedicalVocabularyResponse;
    public CreateMedicalVocabularyResponse withCreateMedicalVocabularyResponse(openapisdk.models.shared.CreateMedicalVocabularyResponse createMedicalVocabularyResponse) {
        this.createMedicalVocabularyResponse = createMedicalVocabularyResponse;
        return this;
    }
    public Object internalFailureException;
    public CreateMedicalVocabularyResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object limitExceededException;
    public CreateMedicalVocabularyResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Long statusCode;
    public CreateMedicalVocabularyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}