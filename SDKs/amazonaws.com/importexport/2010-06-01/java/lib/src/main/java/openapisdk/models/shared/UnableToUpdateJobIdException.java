package openapisdk.models.shared;



/**
 * UnableToUpdateJobIdException
 * AWS Import/Export cannot update the job
**/
public class UnableToUpdateJobIdException {
    public String message;
    public UnableToUpdateJobIdException withMessage(String message) {
        this.message = message;
        return this;
    }
}