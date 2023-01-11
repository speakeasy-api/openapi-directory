package openapisdk.models.shared;



/**
 * UploadSigningCertificateResponse
 * Contains the response to a successful <a>UploadSigningCertificate</a> request. 
**/
public class UploadSigningCertificateResponse {
    public SigningCertificate certificate;
    public UploadSigningCertificateResponse withCertificate(SigningCertificate certificate) {
        this.certificate = certificate;
        return this;
    }
}