package openapisdk.models.operations;



public class UpdateMedicalVocabularyResponse {
    public Object badRequestException;
    public UpdateMedicalVocabularyResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object conflictException;
    public UpdateMedicalVocabularyResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public UpdateMedicalVocabularyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public UpdateMedicalVocabularyResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object limitExceededException;
    public UpdateMedicalVocabularyResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public UpdateMedicalVocabularyResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateMedicalVocabularyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateMedicalVocabularyResponse updateMedicalVocabularyResponse;
    public UpdateMedicalVocabularyResponse withUpdateMedicalVocabularyResponse(openapisdk.models.shared.UpdateMedicalVocabularyResponse updateMedicalVocabularyResponse) {
        this.updateMedicalVocabularyResponse = updateMedicalVocabularyResponse;
        return this;
    }
}