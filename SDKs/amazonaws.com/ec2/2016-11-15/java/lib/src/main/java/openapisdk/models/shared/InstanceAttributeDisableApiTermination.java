package openapisdk.models.shared;



/**
 * InstanceAttributeDisableApiTermination
 * If the value is <code>true</code>, you can't terminate the instance through the Amazon EC2 console, CLI, or API; otherwise, you can.
**/
public class InstanceAttributeDisableApiTermination {
    public java.util.Map<String, Object> value;
    public InstanceAttributeDisableApiTermination withValue(java.util.Map<String, Object> value) {
        this.value = value;
        return this;
    }
}