package openapisdk.models.shared;



/**
 * BaseException
 * An error occurred while processing the request.
**/
public class BaseException {
    public String code;
    public BaseException withCode(String code) {
        this.code = code;
        return this;
    }
    public String message;
    public BaseException withMessage(String message) {
        this.message = message;
        return this;
    }
}