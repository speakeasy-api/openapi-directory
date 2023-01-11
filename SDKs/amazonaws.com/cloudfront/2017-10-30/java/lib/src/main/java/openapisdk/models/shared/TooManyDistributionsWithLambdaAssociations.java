package openapisdk.models.shared;



/**
 * TooManyDistributionsWithLambdaAssociations
 * Processing your request would cause the maximum number of distributions with Lambda function associations per owner to be exceeded.
**/
public class TooManyDistributionsWithLambdaAssociations {
    public String message;
    public TooManyDistributionsWithLambdaAssociations withMessage(String message) {
        this.message = message;
        return this;
    }
}