package openapisdk.models.operations;



public class DeleteMedicalVocabularyResponse {
    public Object badRequestException;
    public DeleteMedicalVocabularyResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public DeleteMedicalVocabularyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public DeleteMedicalVocabularyResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object limitExceededException;
    public DeleteMedicalVocabularyResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public DeleteMedicalVocabularyResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteMedicalVocabularyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}