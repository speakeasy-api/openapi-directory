package openapisdk.models.operations;



public class GetMedicalVocabularyResponse {
    public Object badRequestException;
    public GetMedicalVocabularyResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetMedicalVocabularyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetMedicalVocabularyResponse getMedicalVocabularyResponse;
    public GetMedicalVocabularyResponse withGetMedicalVocabularyResponse(openapisdk.models.shared.GetMedicalVocabularyResponse getMedicalVocabularyResponse) {
        this.getMedicalVocabularyResponse = getMedicalVocabularyResponse;
        return this;
    }
    public Object internalFailureException;
    public GetMedicalVocabularyResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object limitExceededException;
    public GetMedicalVocabularyResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public GetMedicalVocabularyResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetMedicalVocabularyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}