package openapisdk.models.shared;



/**
 * TooManyInvalidationsInProgress
 * You have exceeded the maximum number of allowable InProgress invalidation batch requests, or invalidation objects.
**/
public class TooManyInvalidationsInProgress {
    public String message;
    public TooManyInvalidationsInProgress withMessage(String message) {
        this.message = message;
        return this;
    }
}