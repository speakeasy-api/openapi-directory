package openapisdk.models.shared;



/**
 * TooManyDistributionCnamEs
 * Your request contains more CNAMEs than are allowed per distribution.
**/
public class TooManyDistributionCnamEs {
    public String message;
    public TooManyDistributionCnamEs withMessage(String message) {
        this.message = message;
        return this;
    }
}