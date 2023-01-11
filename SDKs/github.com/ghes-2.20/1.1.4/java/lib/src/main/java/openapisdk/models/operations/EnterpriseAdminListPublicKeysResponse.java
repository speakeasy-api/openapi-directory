package openapisdk.models.operations;



public class EnterpriseAdminListPublicKeysResponse {
    public String contentType;
    public EnterpriseAdminListPublicKeysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public EnterpriseAdminListPublicKeysResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public EnterpriseAdminListPublicKeysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.EnterprisePublicKey[] enterprisePublicKeys;
    public EnterpriseAdminListPublicKeysResponse withEnterprisePublicKeys(openapisdk.models.shared.EnterprisePublicKey[] enterprisePublicKeys) {
        this.enterprisePublicKeys = enterprisePublicKeys;
        return this;
    }
}