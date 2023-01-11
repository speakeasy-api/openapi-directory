package openapisdk.models.shared;



/**
 * InvalidJobIdException
 * The JOBID was missing, not found, or not associated with the AWS account.
**/
public class InvalidJobIdException {
    public String message;
    public InvalidJobIdException withMessage(String message) {
        this.message = message;
        return this;
    }
}