package openapisdk.models.operations;



public class PostModifyDbClusterEndpointResponse {
    public byte[] body;
    public PostModifyDbClusterEndpointResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostModifyDbClusterEndpointResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostModifyDbClusterEndpointResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}