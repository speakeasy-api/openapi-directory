package openapisdk.models.operations;



public class GetModifyClusterDbRevisionResponse {
    public byte[] body;
    public GetModifyClusterDbRevisionResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetModifyClusterDbRevisionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetModifyClusterDbRevisionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}