package openapisdk.models.operations;



public class PostDeleteConfigurationSetResponse {
    public byte[] body;
    public PostDeleteConfigurationSetResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDeleteConfigurationSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDeleteConfigurationSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}