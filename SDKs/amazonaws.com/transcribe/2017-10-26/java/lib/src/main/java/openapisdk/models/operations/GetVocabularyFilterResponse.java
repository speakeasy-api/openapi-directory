package openapisdk.models.operations;



public class GetVocabularyFilterResponse {
    public Object badRequestException;
    public GetVocabularyFilterResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetVocabularyFilterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetVocabularyFilterResponse getVocabularyFilterResponse;
    public GetVocabularyFilterResponse withGetVocabularyFilterResponse(openapisdk.models.shared.GetVocabularyFilterResponse getVocabularyFilterResponse) {
        this.getVocabularyFilterResponse = getVocabularyFilterResponse;
        return this;
    }
    public Object internalFailureException;
    public GetVocabularyFilterResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object limitExceededException;
    public GetVocabularyFilterResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public GetVocabularyFilterResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetVocabularyFilterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}