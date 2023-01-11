package openapisdk.models.operations;



public class ListTagsForResourceResponse {
    public String contentType;
    public ListTagsForResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidArn;
    public ListTagsForResourceResponse withInvalidArn(Object invalidArn) {
        this.invalidArn = invalidArn;
        return this;
    }
    public openapisdk.models.shared.ListTagsForResourceOutput listTagsForResourceOutput;
    public ListTagsForResourceResponse withListTagsForResourceOutput(openapisdk.models.shared.ListTagsForResourceOutput listTagsForResourceOutput) {
        this.listTagsForResourceOutput = listTagsForResourceOutput;
        return this;
    }
    public Object resourceNotFound;
    public ListTagsForResourceResponse withResourceNotFound(Object resourceNotFound) {
        this.resourceNotFound = resourceNotFound;
        return this;
    }
    public Long statusCode;
    public ListTagsForResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}