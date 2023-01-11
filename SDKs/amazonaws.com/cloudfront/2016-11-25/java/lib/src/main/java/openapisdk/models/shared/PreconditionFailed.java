package openapisdk.models.shared;



/**
 * PreconditionFailed
 * The precondition given in one or more of the request-header fields evaluated to <code>false</code>. 
**/
public class PreconditionFailed {
    public String message;
    public PreconditionFailed withMessage(String message) {
        this.message = message;
        return this;
    }
}