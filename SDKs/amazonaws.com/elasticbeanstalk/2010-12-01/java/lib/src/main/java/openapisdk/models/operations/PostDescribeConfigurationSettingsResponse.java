package openapisdk.models.operations;



public class PostDescribeConfigurationSettingsResponse {
    public byte[] body;
    public PostDescribeConfigurationSettingsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDescribeConfigurationSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDescribeConfigurationSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}