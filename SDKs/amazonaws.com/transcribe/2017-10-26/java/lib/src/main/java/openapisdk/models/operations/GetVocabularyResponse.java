package openapisdk.models.operations;



public class GetVocabularyResponse {
    public Object badRequestException;
    public GetVocabularyResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetVocabularyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetVocabularyResponse getVocabularyResponse;
    public GetVocabularyResponse withGetVocabularyResponse(openapisdk.models.shared.GetVocabularyResponse getVocabularyResponse) {
        this.getVocabularyResponse = getVocabularyResponse;
        return this;
    }
    public Object internalFailureException;
    public GetVocabularyResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object limitExceededException;
    public GetVocabularyResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public GetVocabularyResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetVocabularyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}