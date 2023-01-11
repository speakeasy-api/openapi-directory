package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PolicyToPath
 * Used when a regular object exists in a <a>Directory</a> and you want to find all of the policies that are associated with that object and the parent to that object.
**/
public class PolicyToPath {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Path")
    public String path;
    public PolicyToPath withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Policies")
    public PolicyAttachment[] policies;
    public PolicyToPath withPolicies(PolicyAttachment[] policies) {
        this.policies = policies;
        return this;
    }
}