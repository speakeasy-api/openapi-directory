package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PipelineConfig
 * The pipeline configuration for a resolver of kind <code>PIPELINE</code>.
**/
public class PipelineConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("functions")
    public String[] functions;
    public PipelineConfig withFunctions(String[] functions) {
        this.functions = functions;
        return this;
    }
}