package openapisdk.models.operations;



public class ExtensionConfigurationResponse {
    public byte[] body;
    public ExtensionConfigurationResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ExtensionConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ExtensionConfigurationResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ExtensionConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}