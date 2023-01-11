package openapisdk.models.operations;



public class PostAllocateAddressResponse {
    public byte[] body;
    public PostAllocateAddressResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostAllocateAddressResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostAllocateAddressResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}