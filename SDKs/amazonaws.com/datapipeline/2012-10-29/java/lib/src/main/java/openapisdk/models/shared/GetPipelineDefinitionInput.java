package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetPipelineDefinitionInput
 * Contains the parameters for GetPipelineDefinition.
**/
public class GetPipelineDefinitionInput {
    @JsonProperty("pipelineId")
    public String pipelineId;
    public GetPipelineDefinitionInput withPipelineId(String pipelineId) {
        this.pipelineId = pipelineId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public GetPipelineDefinitionInput withVersion(String version) {
        this.version = version;
        return this;
    }
}