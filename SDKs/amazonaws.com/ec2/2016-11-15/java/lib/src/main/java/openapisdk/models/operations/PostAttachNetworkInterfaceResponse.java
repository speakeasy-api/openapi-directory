package openapisdk.models.operations;



public class PostAttachNetworkInterfaceResponse {
    public byte[] body;
    public PostAttachNetworkInterfaceResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostAttachNetworkInterfaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostAttachNetworkInterfaceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}