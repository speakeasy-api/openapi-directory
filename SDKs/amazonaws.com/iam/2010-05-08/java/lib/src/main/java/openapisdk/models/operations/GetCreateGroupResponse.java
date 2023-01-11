package openapisdk.models.operations;



public class GetCreateGroupResponse {
    public byte[] body;
    public GetCreateGroupResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetCreateGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCreateGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}