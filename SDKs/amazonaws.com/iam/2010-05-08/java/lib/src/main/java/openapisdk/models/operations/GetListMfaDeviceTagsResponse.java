package openapisdk.models.operations;



public class GetListMfaDeviceTagsResponse {
    public byte[] body;
    public GetListMfaDeviceTagsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetListMfaDeviceTagsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetListMfaDeviceTagsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}