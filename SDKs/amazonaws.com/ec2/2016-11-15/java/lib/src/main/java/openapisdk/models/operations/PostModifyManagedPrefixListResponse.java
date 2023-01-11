package openapisdk.models.operations;



public class PostModifyManagedPrefixListResponse {
    public byte[] body;
    public PostModifyManagedPrefixListResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostModifyManagedPrefixListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostModifyManagedPrefixListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}