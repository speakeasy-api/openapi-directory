package openapisdk.models.operations;



public class ListTagsLogGroupResponse {
    public String contentType;
    public ListTagsLogGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListTagsLogGroupResponse listTagsLogGroupResponse;
    public ListTagsLogGroupResponse withListTagsLogGroupResponse(openapisdk.models.shared.ListTagsLogGroupResponse listTagsLogGroupResponse) {
        this.listTagsLogGroupResponse = listTagsLogGroupResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListTagsLogGroupResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public ListTagsLogGroupResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListTagsLogGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}