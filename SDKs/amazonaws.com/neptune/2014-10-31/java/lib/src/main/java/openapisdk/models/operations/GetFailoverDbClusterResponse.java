package openapisdk.models.operations;



public class GetFailoverDbClusterResponse {
    public byte[] body;
    public GetFailoverDbClusterResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetFailoverDbClusterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetFailoverDbClusterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}