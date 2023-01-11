package openapisdk.models.shared;



/**
 * TargetGroupAttribute
 * Information about a target group attribute.
**/
public class TargetGroupAttribute {
    public String key;
    public TargetGroupAttribute withKey(String key) {
        this.key = key;
        return this;
    }
    public String value;
    public TargetGroupAttribute withValue(String value) {
        this.value = value;
        return this;
    }
}