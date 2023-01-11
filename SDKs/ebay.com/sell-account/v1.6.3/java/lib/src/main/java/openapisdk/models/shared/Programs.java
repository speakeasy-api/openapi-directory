package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Programs
 * A list of the supported seller programs.
**/
public class Programs {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("programs")
    public Program[] programs;
    public Programs withPrograms(Program[] programs) {
        this.programs = programs;
        return this;
    }
}