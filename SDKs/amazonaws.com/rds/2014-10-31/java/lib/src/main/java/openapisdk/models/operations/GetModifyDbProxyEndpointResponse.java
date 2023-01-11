package openapisdk.models.operations;



public class GetModifyDbProxyEndpointResponse {
    public byte[] body;
    public GetModifyDbProxyEndpointResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetModifyDbProxyEndpointResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetModifyDbProxyEndpointResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}