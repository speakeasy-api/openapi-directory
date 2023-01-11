package openapisdk.models.shared;



/**
 * UnableToCancelJobIdException
 * AWS Import/Export cannot cancel the job
**/
public class UnableToCancelJobIdException {
    public String message;
    public UnableToCancelJobIdException withMessage(String message) {
        this.message = message;
        return this;
    }
}