package openapisdk.models.shared;



/**
 * TooManyDistributions
 * Processing your request would cause you to exceed the maximum number of distributions allowed.
**/
public class TooManyDistributions {
    public String message;
    public TooManyDistributions withMessage(String message) {
        this.message = message;
        return this;
    }
}