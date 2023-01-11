package openapisdk.models.operations;



public class PutStoredQueryResponse {
    public String contentType;
    public PutStoredQueryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PutStoredQueryResponse putStoredQueryResponse;
    public PutStoredQueryResponse withPutStoredQueryResponse(openapisdk.models.shared.PutStoredQueryResponse putStoredQueryResponse) {
        this.putStoredQueryResponse = putStoredQueryResponse;
        return this;
    }
    public Object resourceConcurrentModificationException;
    public PutStoredQueryResponse withResourceConcurrentModificationException(Object resourceConcurrentModificationException) {
        this.resourceConcurrentModificationException = resourceConcurrentModificationException;
        return this;
    }
    public Long statusCode;
    public PutStoredQueryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyTagsException;
    public PutStoredQueryResponse withTooManyTagsException(Object tooManyTagsException) {
        this.tooManyTagsException = tooManyTagsException;
        return this;
    }
    public Object validationException;
    public PutStoredQueryResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}