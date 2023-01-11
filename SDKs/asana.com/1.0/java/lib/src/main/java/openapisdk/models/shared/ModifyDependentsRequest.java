package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ModifyDependentsRequest
 * A set of dependent tasks.
**/
public class ModifyDependentsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dependents")
    public String[] dependents;
    public ModifyDependentsRequest withDependents(String[] dependents) {
        this.dependents = dependents;
        return this;
    }
}