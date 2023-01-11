package openapisdk.models.shared;



/**
 * ExpiredJobIdException
 * Indicates that the specified job has expired out of the system.
**/
public class ExpiredJobIdException {
    public String message;
    public ExpiredJobIdException withMessage(String message) {
        this.message = message;
        return this;
    }
}