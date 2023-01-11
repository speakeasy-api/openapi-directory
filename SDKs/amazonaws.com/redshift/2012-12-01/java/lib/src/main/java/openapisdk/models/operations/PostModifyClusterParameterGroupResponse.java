package openapisdk.models.operations;



public class PostModifyClusterParameterGroupResponse {
    public byte[] body;
    public PostModifyClusterParameterGroupResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostModifyClusterParameterGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostModifyClusterParameterGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}