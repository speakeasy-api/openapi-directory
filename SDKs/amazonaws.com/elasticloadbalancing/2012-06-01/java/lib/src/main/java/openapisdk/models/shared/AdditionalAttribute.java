package openapisdk.models.shared;



/**
 * AdditionalAttribute
 * Information about additional load balancer attributes.
**/
public class AdditionalAttribute {
    public String key;
    public AdditionalAttribute withKey(String key) {
        this.key = key;
        return this;
    }
    public String value;
    public AdditionalAttribute withValue(String value) {
        this.value = value;
        return this;
    }
}