package openapisdk.models.operations;



public class GetEnableMfaDeviceResponse {
    public byte[] body;
    public GetEnableMfaDeviceResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetEnableMfaDeviceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetEnableMfaDeviceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}