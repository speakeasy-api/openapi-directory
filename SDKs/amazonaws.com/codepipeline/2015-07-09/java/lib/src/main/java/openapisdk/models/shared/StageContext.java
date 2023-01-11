package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StageContext
 * Represents information about a stage to a job worker.
**/
public class StageContext {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public StageContext withName(String name) {
        this.name = name;
        return this;
    }
}