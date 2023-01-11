package openapisdk.models.operations;



public class PostModifyClusterDbRevisionResponse {
    public byte[] body;
    public PostModifyClusterDbRevisionResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostModifyClusterDbRevisionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostModifyClusterDbRevisionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}