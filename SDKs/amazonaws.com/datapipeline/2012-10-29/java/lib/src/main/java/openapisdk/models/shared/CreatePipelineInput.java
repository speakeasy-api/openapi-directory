package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreatePipelineInput
 * Contains the parameters for CreatePipeline.
**/
public class CreatePipelineInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreatePipelineInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreatePipelineInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public Tag[] tags;
    public CreatePipelineInput withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("uniqueId")
    public String uniqueId;
    public CreatePipelineInput withUniqueId(String uniqueId) {
        this.uniqueId = uniqueId;
        return this;
    }
}