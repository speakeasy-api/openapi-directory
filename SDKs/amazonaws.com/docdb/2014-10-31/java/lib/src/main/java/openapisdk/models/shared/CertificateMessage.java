package openapisdk.models.shared;



public class CertificateMessage {
    public CertificateList[] certificates;
    public CertificateMessage withCertificates(CertificateList[] certificates) {
        this.certificates = certificates;
        return this;
    }
    public String marker;
    public CertificateMessage withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}