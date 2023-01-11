package openapisdk.models.operations;



public class UpdateVocabularyFilterResponse {
    public Object badRequestException;
    public UpdateVocabularyFilterResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public UpdateVocabularyFilterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public UpdateVocabularyFilterResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object limitExceededException;
    public UpdateVocabularyFilterResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public UpdateVocabularyFilterResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateVocabularyFilterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateVocabularyFilterResponse updateVocabularyFilterResponse;
    public UpdateVocabularyFilterResponse withUpdateVocabularyFilterResponse(openapisdk.models.shared.UpdateVocabularyFilterResponse updateVocabularyFilterResponse) {
        this.updateVocabularyFilterResponse = updateVocabularyFilterResponse;
        return this;
    }
}