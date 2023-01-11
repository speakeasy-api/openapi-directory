package openapisdk.models.operations;



public class GetDeleteDbProxyEndpointResponse {
    public byte[] body;
    public GetDeleteDbProxyEndpointResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetDeleteDbProxyEndpointResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDeleteDbProxyEndpointResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}