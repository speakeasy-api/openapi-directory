package openapisdk.models.operations;



public class UpdateVocabularyResponse {
    public Object badRequestException;
    public UpdateVocabularyResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object conflictException;
    public UpdateVocabularyResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public UpdateVocabularyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public UpdateVocabularyResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object limitExceededException;
    public UpdateVocabularyResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public UpdateVocabularyResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateVocabularyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateVocabularyResponse updateVocabularyResponse;
    public UpdateVocabularyResponse withUpdateVocabularyResponse(openapisdk.models.shared.UpdateVocabularyResponse updateVocabularyResponse) {
        this.updateVocabularyResponse = updateVocabularyResponse;
        return this;
    }
}