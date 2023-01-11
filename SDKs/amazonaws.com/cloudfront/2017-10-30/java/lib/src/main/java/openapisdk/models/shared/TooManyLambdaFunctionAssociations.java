package openapisdk.models.shared;



/**
 * TooManyLambdaFunctionAssociations
 * Your request contains more Lambda function associations than are allowed per distribution.
**/
public class TooManyLambdaFunctionAssociations {
    public String message;
    public TooManyLambdaFunctionAssociations withMessage(String message) {
        this.message = message;
        return this;
    }
}