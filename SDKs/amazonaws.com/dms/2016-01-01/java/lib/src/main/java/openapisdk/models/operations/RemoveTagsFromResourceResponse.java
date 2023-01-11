package openapisdk.models.operations;



public class RemoveTagsFromResourceResponse {
    public String contentType;
    public RemoveTagsFromResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> removeTagsFromResourceResponse;
    public RemoveTagsFromResourceResponse withRemoveTagsFromResourceResponse(java.util.Map<String, Object> removeTagsFromResourceResponse) {
        this.removeTagsFromResourceResponse = removeTagsFromResourceResponse;
        return this;
    }
    public Object resourceNotFoundFault;
    public RemoveTagsFromResourceResponse withResourceNotFoundFault(Object resourceNotFoundFault) {
        this.resourceNotFoundFault = resourceNotFoundFault;
        return this;
    }
    public Long statusCode;
    public RemoveTagsFromResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}