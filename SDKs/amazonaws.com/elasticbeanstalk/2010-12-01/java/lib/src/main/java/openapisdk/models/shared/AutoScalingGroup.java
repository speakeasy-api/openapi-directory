package openapisdk.models.shared;



/**
 * AutoScalingGroup
 * Describes an Auto Scaling launch configuration.
**/
public class AutoScalingGroup {
    public String name;
    public AutoScalingGroup withName(String name) {
        this.name = name;
        return this;
    }
}