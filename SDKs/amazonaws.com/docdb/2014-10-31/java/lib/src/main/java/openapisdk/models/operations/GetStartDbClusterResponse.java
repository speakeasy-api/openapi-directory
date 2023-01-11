package openapisdk.models.operations;



public class GetStartDbClusterResponse {
    public byte[] body;
    public GetStartDbClusterResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetStartDbClusterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetStartDbClusterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}