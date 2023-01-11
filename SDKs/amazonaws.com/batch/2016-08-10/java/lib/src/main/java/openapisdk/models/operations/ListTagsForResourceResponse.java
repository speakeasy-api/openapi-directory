package openapisdk.models.operations;



public class ListTagsForResourceResponse {
    public Object clientException;
    public ListTagsForResourceResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public ListTagsForResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListTagsForResourceResponse listTagsForResourceResponse;
    public ListTagsForResourceResponse withListTagsForResourceResponse(openapisdk.models.shared.ListTagsForResourceResponse listTagsForResourceResponse) {
        this.listTagsForResourceResponse = listTagsForResourceResponse;
        return this;
    }
    public Object serverException;
    public ListTagsForResourceResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public ListTagsForResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}