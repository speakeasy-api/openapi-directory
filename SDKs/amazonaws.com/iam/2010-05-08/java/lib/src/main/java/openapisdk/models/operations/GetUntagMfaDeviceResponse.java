package openapisdk.models.operations;



public class GetUntagMfaDeviceResponse {
    public byte[] body;
    public GetUntagMfaDeviceResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetUntagMfaDeviceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetUntagMfaDeviceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}