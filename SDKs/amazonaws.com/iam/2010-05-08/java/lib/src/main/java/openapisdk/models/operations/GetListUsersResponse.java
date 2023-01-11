package openapisdk.models.operations;



public class GetListUsersResponse {
    public byte[] body;
    public GetListUsersResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetListUsersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetListUsersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}