package openapisdk.models.shared;



/**
 * InconsistentQuantities
 * The value of <code>Quantity</code> and the size of <code>Items</code> don't match.
**/
public class InconsistentQuantities {
    public String message;
    public InconsistentQuantities withMessage(String message) {
        this.message = message;
        return this;
    }
}