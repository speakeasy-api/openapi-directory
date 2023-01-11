package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AutoScalingGroup
 * An Auto Scaling group that is associated with an Amazon EKS managed node group.
**/
public class AutoScalingGroup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AutoScalingGroup withName(String name) {
        this.name = name;
        return this;
    }
}