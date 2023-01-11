package openapisdk.models.operations;



public class GetUpdateUserResponse {
    public byte[] body;
    public GetUpdateUserResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetUpdateUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetUpdateUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}