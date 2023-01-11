package openapisdk.models.operations;



public class GetModifyUserResponse {
    public byte[] body;
    public GetModifyUserResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetModifyUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetModifyUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}