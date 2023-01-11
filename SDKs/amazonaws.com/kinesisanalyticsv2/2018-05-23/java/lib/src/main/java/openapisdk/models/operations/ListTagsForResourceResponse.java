package openapisdk.models.operations;



public class ListTagsForResourceResponse {
    public Object concurrentModificationException;
    public ListTagsForResourceResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public ListTagsForResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidArgumentException;
    public ListTagsForResourceResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public openapisdk.models.shared.ListTagsForResourceResponse listTagsForResourceResponse;
    public ListTagsForResourceResponse withListTagsForResourceResponse(openapisdk.models.shared.ListTagsForResourceResponse listTagsForResourceResponse) {
        this.listTagsForResourceResponse = listTagsForResourceResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListTagsForResourceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListTagsForResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}