package openapisdk.models.operations;



public class ListVocabularyFiltersResponse {
    public Object badRequestException;
    public ListVocabularyFiltersResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public ListVocabularyFiltersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListVocabularyFiltersResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object limitExceededException;
    public ListVocabularyFiltersResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ListVocabularyFiltersResponse listVocabularyFiltersResponse;
    public ListVocabularyFiltersResponse withListVocabularyFiltersResponse(openapisdk.models.shared.ListVocabularyFiltersResponse listVocabularyFiltersResponse) {
        this.listVocabularyFiltersResponse = listVocabularyFiltersResponse;
        return this;
    }
    public Long statusCode;
    public ListVocabularyFiltersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}