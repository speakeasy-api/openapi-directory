package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RemoveTagsInput
 * Contains the parameters for RemoveTags.
**/
public class RemoveTagsInput {
    @JsonProperty("pipelineId")
    public String pipelineId;
    public RemoveTagsInput withPipelineId(String pipelineId) {
        this.pipelineId = pipelineId;
        return this;
    }
    @JsonProperty("tagKeys")
    public String[] tagKeys;
    public RemoveTagsInput withTagKeys(String[] tagKeys) {
        this.tagKeys = tagKeys;
        return this;
    }
}