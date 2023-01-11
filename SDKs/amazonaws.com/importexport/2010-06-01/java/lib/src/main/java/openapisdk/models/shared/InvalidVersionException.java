package openapisdk.models.shared;



/**
 * InvalidVersionException
 * The client tool version is invalid.
**/
public class InvalidVersionException {
    public String message;
    public InvalidVersionException withMessage(String message) {
        this.message = message;
        return this;
    }
}