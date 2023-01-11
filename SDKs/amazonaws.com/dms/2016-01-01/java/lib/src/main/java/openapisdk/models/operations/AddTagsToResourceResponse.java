package openapisdk.models.operations;



public class AddTagsToResourceResponse {
    public java.util.Map<String, Object> addTagsToResourceResponse;
    public AddTagsToResourceResponse withAddTagsToResourceResponse(java.util.Map<String, Object> addTagsToResourceResponse) {
        this.addTagsToResourceResponse = addTagsToResourceResponse;
        return this;
    }
    public String contentType;
    public AddTagsToResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object resourceNotFoundFault;
    public AddTagsToResourceResponse withResourceNotFoundFault(Object resourceNotFoundFault) {
        this.resourceNotFoundFault = resourceNotFoundFault;
        return this;
    }
    public Long statusCode;
    public AddTagsToResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}