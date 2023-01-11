package openapisdk.models.shared;



/**
 * TooManyStreamingDistributions
 * Processing your request would cause you to exceed the maximum number of streaming distributions allowed.
**/
public class TooManyStreamingDistributions {
    public String message;
    public TooManyStreamingDistributions withMessage(String message) {
        this.message = message;
        return this;
    }
}