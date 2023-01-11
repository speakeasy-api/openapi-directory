package openapisdk.models.operations;



public class PostDescribeBundleTasksResponse {
    public byte[] body;
    public PostDescribeBundleTasksResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDescribeBundleTasksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDescribeBundleTasksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}