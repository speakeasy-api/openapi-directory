package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateResolverRequestBodyPipelineConfig
 * The pipeline configuration for a resolver of kind <code>PIPELINE</code>.
**/
public class CreateResolverRequestBodyPipelineConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("functions")
    public String[] functions;
    public CreateResolverRequestBodyPipelineConfig withFunctions(String[] functions) {
        this.functions = functions;
        return this;
    }
}