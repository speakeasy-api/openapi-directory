package openapisdk.models.operations;



public class PostEnterStandbyResponse {
    public byte[] body;
    public PostEnterStandbyResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostEnterStandbyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostEnterStandbyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}