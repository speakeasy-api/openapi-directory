package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Processor
 * Describes a data processor.
**/
public class Processor {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Parameters")
    public ProcessorParameter[] parameters;
    public Processor withParameters(ProcessorParameter[] parameters) {
        this.parameters = parameters;
        return this;
    }
    @JsonProperty("Type")
    public ProcessorTypeEnum type;
    public Processor withType(ProcessorTypeEnum type) {
        this.type = type;
        return this;
    }
}