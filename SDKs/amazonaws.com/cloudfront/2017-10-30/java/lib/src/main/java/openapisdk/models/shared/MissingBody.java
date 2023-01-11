package openapisdk.models.shared;



/**
 * MissingBody
 * This operation requires a body. Ensure that the body is present and the <code>Content-Type</code> header is set.
**/
public class MissingBody {
    public String message;
    public MissingBody withMessage(String message) {
        this.message = message;
        return this;
    }
}