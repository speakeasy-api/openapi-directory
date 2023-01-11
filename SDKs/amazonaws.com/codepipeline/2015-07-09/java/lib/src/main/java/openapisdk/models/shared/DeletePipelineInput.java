package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeletePipelineInput
 * Represents the input of a <code>DeletePipeline</code> action.
**/
public class DeletePipelineInput {
    @JsonProperty("name")
    public String name;
    public DeletePipelineInput withName(String name) {
        this.name = name;
        return this;
    }
}