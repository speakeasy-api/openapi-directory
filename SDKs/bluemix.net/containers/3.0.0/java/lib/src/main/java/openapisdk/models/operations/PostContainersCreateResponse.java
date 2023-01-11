package openapisdk.models.operations;



public class PostContainersCreateResponse {
    public Object containerId;
    public PostContainersCreateResponse withContainerId(Object containerId) {
        this.containerId = containerId;
        return this;
    }
    public String contentType;
    public PostContainersCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostContainersCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}