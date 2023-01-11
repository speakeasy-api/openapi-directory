package openapisdk.models.operations;



public class ListVocabulariesResponse {
    public Object badRequestException;
    public ListVocabulariesResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public ListVocabulariesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListVocabulariesResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object limitExceededException;
    public ListVocabulariesResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ListVocabulariesResponse listVocabulariesResponse;
    public ListVocabulariesResponse withListVocabulariesResponse(openapisdk.models.shared.ListVocabulariesResponse listVocabulariesResponse) {
        this.listVocabulariesResponse = listVocabulariesResponse;
        return this;
    }
    public Long statusCode;
    public ListVocabulariesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}