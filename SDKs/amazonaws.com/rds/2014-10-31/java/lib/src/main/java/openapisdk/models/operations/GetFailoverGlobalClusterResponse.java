package openapisdk.models.operations;



public class GetFailoverGlobalClusterResponse {
    public byte[] body;
    public GetFailoverGlobalClusterResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetFailoverGlobalClusterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetFailoverGlobalClusterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}