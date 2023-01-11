package openapisdk.models.operations;



public class GetDeleteEndpointAccessResponse {
    public byte[] body;
    public GetDeleteEndpointAccessResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetDeleteEndpointAccessResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDeleteEndpointAccessResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}