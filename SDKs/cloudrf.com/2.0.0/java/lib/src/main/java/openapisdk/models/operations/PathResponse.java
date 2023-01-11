package openapisdk.models.operations;



public class PathResponse {
    public String contentType;
    public PathResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PathResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}