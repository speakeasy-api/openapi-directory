package openapisdk.models.shared;



/**
 * DistributionAlreadyExists
 * The caller reference you attempted to create the distribution with is associated with another distribution.
**/
public class DistributionAlreadyExists {
    public String message;
    public DistributionAlreadyExists withMessage(String message) {
        this.message = message;
        return this;
    }
}