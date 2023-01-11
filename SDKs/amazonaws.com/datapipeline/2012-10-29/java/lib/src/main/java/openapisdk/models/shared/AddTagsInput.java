package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AddTagsInput
 * Contains the parameters for AddTags.
**/
public class AddTagsInput {
    @JsonProperty("pipelineId")
    public String pipelineId;
    public AddTagsInput withPipelineId(String pipelineId) {
        this.pipelineId = pipelineId;
        return this;
    }
    @JsonProperty("tags")
    public Tag[] tags;
    public AddTagsInput withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}