package openapisdk.models.operations;



public class GetDeleteConfigurationSetResponse {
    public byte[] body;
    public GetDeleteConfigurationSetResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetDeleteConfigurationSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDeleteConfigurationSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}