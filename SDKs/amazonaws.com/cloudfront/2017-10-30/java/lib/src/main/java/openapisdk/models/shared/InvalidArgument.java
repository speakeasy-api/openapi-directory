package openapisdk.models.shared;



/**
 * InvalidArgument
 * The argument is invalid.
**/
public class InvalidArgument {
    public String message;
    public InvalidArgument withMessage(String message) {
        this.message = message;
        return this;
    }
}