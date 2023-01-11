package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ModificationState
 * Describes a WorkSpace modification.
**/
public class ModificationState {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Resource")
    public ModificationResourceEnumEnum resource;
    public ModificationState withResource(ModificationResourceEnumEnum resource) {
        this.resource = resource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("State")
    public ModificationStateEnumEnum state;
    public ModificationState withState(ModificationStateEnumEnum state) {
        this.state = state;
        return this;
    }
}