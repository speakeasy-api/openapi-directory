package openapisdk.models.operations;



public class GetListVirtualMfaDevicesResponse {
    public byte[] body;
    public GetListVirtualMfaDevicesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetListVirtualMfaDevicesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetListVirtualMfaDevicesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}