package openapisdk.models.operations;



public class PostCreateNetworkInterfaceResponse {
    public byte[] body;
    public PostCreateNetworkInterfaceResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostCreateNetworkInterfaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostCreateNetworkInterfaceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}