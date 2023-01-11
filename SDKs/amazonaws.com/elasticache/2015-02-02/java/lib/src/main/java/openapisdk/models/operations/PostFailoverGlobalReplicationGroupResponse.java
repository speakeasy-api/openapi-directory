package openapisdk.models.operations;



public class PostFailoverGlobalReplicationGroupResponse {
    public byte[] body;
    public PostFailoverGlobalReplicationGroupResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostFailoverGlobalReplicationGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostFailoverGlobalReplicationGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}