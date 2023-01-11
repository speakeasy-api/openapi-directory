package openapisdk.models.operations;



public class GetRestoreManagedPrefixListVersionResponse {
    public byte[] body;
    public GetRestoreManagedPrefixListVersionResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetRestoreManagedPrefixListVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRestoreManagedPrefixListVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}