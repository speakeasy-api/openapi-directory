package openapisdk.models.shared;



/**
 * InvalidLambdaFunctionAssociation
 * The specified Lambda function association is invalid.
**/
public class InvalidLambdaFunctionAssociation {
    public String message;
    public InvalidLambdaFunctionAssociation withMessage(String message) {
        this.message = message;
        return this;
    }
}