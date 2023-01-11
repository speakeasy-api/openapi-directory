package openapisdk.models.shared;



/**
 * CanceledJobIdException
 * The specified job ID has been canceled and is no longer valid.
**/
public class CanceledJobIdException {
    public String message;
    public CanceledJobIdException withMessage(String message) {
        this.message = message;
        return this;
    }
}