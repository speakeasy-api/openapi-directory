package openapisdk.models.operations;



public class PostValidateConfigurationSettingsResponse {
    public byte[] body;
    public PostValidateConfigurationSettingsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostValidateConfigurationSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostValidateConfigurationSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}