package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateResolverRequestBodyPipelineConfig
 * The pipeline configuration for a resolver of kind <code>PIPELINE</code>.
**/
public class UpdateResolverRequestBodyPipelineConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("functions")
    public String[] functions;
    public UpdateResolverRequestBodyPipelineConfig withFunctions(String[] functions) {
        this.functions = functions;
        return this;
    }
}