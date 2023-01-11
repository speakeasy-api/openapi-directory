package openapisdk.models.operations;



public class GetDeactivateMfaDeviceResponse {
    public byte[] body;
    public GetDeactivateMfaDeviceResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetDeactivateMfaDeviceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDeactivateMfaDeviceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}