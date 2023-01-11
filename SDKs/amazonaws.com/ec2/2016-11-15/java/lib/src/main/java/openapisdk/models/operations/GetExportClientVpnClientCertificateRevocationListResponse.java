package openapisdk.models.operations;



public class GetExportClientVpnClientCertificateRevocationListResponse {
    public byte[] body;
    public GetExportClientVpnClientCertificateRevocationListResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetExportClientVpnClientCertificateRevocationListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetExportClientVpnClientCertificateRevocationListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}