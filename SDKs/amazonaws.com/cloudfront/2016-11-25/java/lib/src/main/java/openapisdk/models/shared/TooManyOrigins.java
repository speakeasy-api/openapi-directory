package openapisdk.models.shared;



/**
 * TooManyOrigins
 * You cannot create more origins for the distribution.
**/
public class TooManyOrigins {
    public String message;
    public TooManyOrigins withMessage(String message) {
        this.message = message;
        return this;
    }
}