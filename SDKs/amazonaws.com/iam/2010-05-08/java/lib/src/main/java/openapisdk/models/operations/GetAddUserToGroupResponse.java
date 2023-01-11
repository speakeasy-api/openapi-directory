package openapisdk.models.operations;



public class GetAddUserToGroupResponse {
    public byte[] body;
    public GetAddUserToGroupResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetAddUserToGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAddUserToGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}