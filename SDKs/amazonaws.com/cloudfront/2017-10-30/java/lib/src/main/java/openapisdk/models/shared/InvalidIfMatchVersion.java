package openapisdk.models.shared;



/**
 * InvalidIfMatchVersion
 * The <code>If-Match</code> version is missing or not valid for the distribution.
**/
public class InvalidIfMatchVersion {
    public String message;
    public InvalidIfMatchVersion withMessage(String message) {
        this.message = message;
        return this;
    }
}