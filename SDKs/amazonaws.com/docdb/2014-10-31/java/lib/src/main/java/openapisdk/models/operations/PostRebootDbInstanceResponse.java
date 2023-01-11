package openapisdk.models.operations;



public class PostRebootDbInstanceResponse {
    public byte[] body;
    public PostRebootDbInstanceResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostRebootDbInstanceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostRebootDbInstanceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}