package openapisdk.models.operations;



public class GetAuthorizableKeystoreResponse {
    public String contentType;
    public GetAuthorizableKeystoreResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public String keystoreInfo;
    public GetAuthorizableKeystoreResponse withKeystoreInfo(String keystoreInfo) {
        this.keystoreInfo = keystoreInfo;
        return this;
    }
    public Long statusCode;
    public GetAuthorizableKeystoreResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String getAuthorizableKeystoreDefaultTextPlainString;
    public GetAuthorizableKeystoreResponse withGetAuthorizableKeystoreDefaultTextPlainString(String getAuthorizableKeystoreDefaultTextPlainString) {
        this.getAuthorizableKeystoreDefaultTextPlainString = getAuthorizableKeystoreDefaultTextPlainString;
        return this;
    }
}