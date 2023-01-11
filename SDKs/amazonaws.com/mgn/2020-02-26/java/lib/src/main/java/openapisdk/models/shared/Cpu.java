package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Cpu
 * Source server CPU information.
**/
public class Cpu {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cores")
    public Long cores;
    public Cpu withCores(Long cores) {
        this.cores = cores;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modelName")
    public String modelName;
    public Cpu withModelName(String modelName) {
        this.modelName = modelName;
        return this;
    }
}