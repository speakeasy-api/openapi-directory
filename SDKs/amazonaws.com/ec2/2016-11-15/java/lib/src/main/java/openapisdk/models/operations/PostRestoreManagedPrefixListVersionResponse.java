package openapisdk.models.operations;



public class PostRestoreManagedPrefixListVersionResponse {
    public byte[] body;
    public PostRestoreManagedPrefixListVersionResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostRestoreManagedPrefixListVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostRestoreManagedPrefixListVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}