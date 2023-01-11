package openapisdk.models.shared;



public class ExportClientVpnClientCertificateRevocationListResult {
    public java.util.Map<String, Object> certificateRevocationList;
    public ExportClientVpnClientCertificateRevocationListResult withCertificateRevocationList(java.util.Map<String, Object> certificateRevocationList) {
        this.certificateRevocationList = certificateRevocationList;
        return this;
    }
    public ExportClientVpnClientCertificateRevocationListResultStatus status;
    public ExportClientVpnClientCertificateRevocationListResult withStatus(ExportClientVpnClientCertificateRevocationListResultStatus status) {
        this.status = status;
        return this;
    }
}