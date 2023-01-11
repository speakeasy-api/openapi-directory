package openapisdk.models.shared;



/**
 * CertificateMessage
 * Data returned by the <b>DescribeCertificates</b> action.
**/
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