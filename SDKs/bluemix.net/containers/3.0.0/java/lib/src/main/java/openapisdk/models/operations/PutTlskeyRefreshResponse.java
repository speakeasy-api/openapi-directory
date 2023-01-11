package openapisdk.models.operations;



public class PutTlskeyRefreshResponse {
    public Object certificateRefresh;
    public PutTlskeyRefreshResponse withCertificateRefresh(Object certificateRefresh) {
        this.certificateRefresh = certificateRefresh;
        return this;
    }
    public String contentType;
    public PutTlskeyRefreshResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PutTlskeyRefreshResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}