package openapisdk.models.shared;



/**
 * HsmClientCertificateMessage
 * <p/>
**/
public class HsmClientCertificateMessage {
    public HsmClientCertificateList[] hsmClientCertificates;
    public HsmClientCertificateMessage withHsmClientCertificates(HsmClientCertificateList[] hsmClientCertificates) {
        this.hsmClientCertificates = hsmClientCertificates;
        return this;
    }
    public String marker;
    public HsmClientCertificateMessage withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}