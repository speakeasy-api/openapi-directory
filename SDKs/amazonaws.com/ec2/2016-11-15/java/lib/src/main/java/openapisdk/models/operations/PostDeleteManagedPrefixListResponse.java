package openapisdk.models.operations;



public class PostDeleteManagedPrefixListResponse {
    public byte[] body;
    public PostDeleteManagedPrefixListResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDeleteManagedPrefixListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDeleteManagedPrefixListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}