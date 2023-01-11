package openapisdk.models.shared;



/**
 * ListSigningCertificatesResponse
 * Contains the response to a successful <a>ListSigningCertificates</a> request. 
**/
public class ListSigningCertificatesResponse {
    public SigningCertificate[] certificates;
    public ListSigningCertificatesResponse withCertificates(SigningCertificate[] certificates) {
        this.certificates = certificates;
        return this;
    }
    public Boolean isTruncated;
    public ListSigningCertificatesResponse withIsTruncated(Boolean isTruncated) {
        this.isTruncated = isTruncated;
        return this;
    }
    public String marker;
    public ListSigningCertificatesResponse withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}