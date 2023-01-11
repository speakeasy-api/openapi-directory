package openapisdk.models.shared;



/**
 * TooManyCertificates
 * You cannot create anymore custom SSL/TLS certificates.
**/
public class TooManyCertificates {
    public String message;
    public TooManyCertificates withMessage(String message) {
        this.message = message;
        return this;
    }
}