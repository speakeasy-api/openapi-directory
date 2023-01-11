package openapisdk.models.operations;



public class PostBuildResponse {
    public String contentType;
    public PostBuildResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostBuildResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}