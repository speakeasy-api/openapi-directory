package openapisdk.models.shared;



/**
 * PublicKeyAlreadyExists
 * The specified public key already exists.
**/
public class PublicKeyAlreadyExists {
    public String message;
    public PublicKeyAlreadyExists withMessage(String message) {
        this.message = message;
        return this;
    }
}