package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PutScalingPolicyOutput
 * Represents the returned data in response to a request operation.
**/
public class PutScalingPolicyOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public PutScalingPolicyOutput withName(String name) {
        this.name = name;
        return this;
    }
}