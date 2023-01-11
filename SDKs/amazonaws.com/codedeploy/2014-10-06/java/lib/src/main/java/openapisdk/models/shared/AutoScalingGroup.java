package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AutoScalingGroup
 * Information about an Auto Scaling group.
**/
public class AutoScalingGroup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hook")
    public String hook;
    public AutoScalingGroup withHook(String hook) {
        this.hook = hook;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AutoScalingGroup withName(String name) {
        this.name = name;
        return this;
    }
}