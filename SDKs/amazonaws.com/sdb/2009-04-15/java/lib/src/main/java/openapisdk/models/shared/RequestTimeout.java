package openapisdk.models.shared;



/**
 * RequestTimeout
 * A timeout occurred when attempting to query the specified domain with specified query expression.
**/
public class RequestTimeout {
    public Float boxUsage;
    public RequestTimeout withBoxUsage(Float boxUsage) {
        this.boxUsage = boxUsage;
        return this;
    }
}