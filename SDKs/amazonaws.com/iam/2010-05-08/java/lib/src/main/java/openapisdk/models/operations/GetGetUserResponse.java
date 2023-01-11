package openapisdk.models.operations;



public class GetGetUserResponse {
    public byte[] body;
    public GetGetUserResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetGetUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetGetUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}