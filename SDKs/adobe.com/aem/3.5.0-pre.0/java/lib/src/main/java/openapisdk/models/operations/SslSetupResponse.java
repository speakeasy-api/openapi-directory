package openapisdk.models.operations;



public class SslSetupResponse {
    public String contentType;
    public SslSetupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SslSetupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String sslSetupDefaultTextPlainString;
    public SslSetupResponse withSslSetupDefaultTextPlainString(String sslSetupDefaultTextPlainString) {
        this.sslSetupDefaultTextPlainString = sslSetupDefaultTextPlainString;
        return this;
    }
}