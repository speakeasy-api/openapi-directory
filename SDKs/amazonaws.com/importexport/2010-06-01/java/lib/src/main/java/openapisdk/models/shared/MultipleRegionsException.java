package openapisdk.models.shared;



/**
 * MultipleRegionsException
 * Your manifest file contained buckets from multiple regions. A job is restricted to buckets from one region. Please correct and resubmit.
**/
public class MultipleRegionsException {
    public String message;
    public MultipleRegionsException withMessage(String message) {
        this.message = message;
        return this;
    }
}