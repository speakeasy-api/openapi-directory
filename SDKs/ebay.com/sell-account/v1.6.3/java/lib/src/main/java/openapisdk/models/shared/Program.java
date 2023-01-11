package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Program
 * A seller program in to which a seller can opt-in.
**/
public class Program {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("programType")
    public String programType;
    public Program withProgramType(String programType) {
        this.programType = programType;
        return this;
    }
}