package openapisdk.models.operations;



public class PostModifyReplicationGroupResponse {
    public byte[] body;
    public PostModifyReplicationGroupResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostModifyReplicationGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostModifyReplicationGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}