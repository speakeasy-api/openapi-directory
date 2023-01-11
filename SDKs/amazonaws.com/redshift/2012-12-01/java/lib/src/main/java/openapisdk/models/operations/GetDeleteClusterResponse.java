package openapisdk.models.operations;



public class GetDeleteClusterResponse {
    public byte[] body;
    public GetDeleteClusterResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetDeleteClusterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDeleteClusterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}