package openapisdk.models.shared;



/**
 * CreateJobQuotaExceededException
 * Each account can create only a certain number of jobs per day. If you need to create more than this, please contact awsimportexport@amazon.com to explain your particular use case.
**/
public class CreateJobQuotaExceededException {
    public String message;
    public CreateJobQuotaExceededException withMessage(String message) {
        this.message = message;
        return this;
    }
}