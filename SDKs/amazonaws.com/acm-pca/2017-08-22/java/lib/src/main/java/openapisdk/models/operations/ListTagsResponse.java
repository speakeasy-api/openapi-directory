package openapisdk.models.operations;



public class ListTagsResponse {
    public String contentType;
    public ListTagsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidArnException;
    public ListTagsResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object invalidStateException;
    public ListTagsResponse withInvalidStateException(Object invalidStateException) {
        this.invalidStateException = invalidStateException;
        return this;
    }
    public openapisdk.models.shared.ListTagsResponse listTagsResponse;
    public ListTagsResponse withListTagsResponse(openapisdk.models.shared.ListTagsResponse listTagsResponse) {
        this.listTagsResponse = listTagsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListTagsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListTagsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}