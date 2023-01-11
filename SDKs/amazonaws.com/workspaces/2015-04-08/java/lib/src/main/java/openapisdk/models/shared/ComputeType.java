package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ComputeType
 * Describes the compute type of the bundle.
**/
public class ComputeType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public ComputeEnum name;
    public ComputeType withName(ComputeEnum name) {
        this.name = name;
        return this;
    }
}