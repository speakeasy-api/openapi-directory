package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RemoveTagsFromStreamInput
 * Represents the input for <code>RemoveTagsFromStream</code>.
**/
public class RemoveTagsFromStreamInput {
    @JsonProperty("StreamName")
    public String streamName;
    public RemoveTagsFromStreamInput withStreamName(String streamName) {
        this.streamName = streamName;
        return this;
    }
    @JsonProperty("TagKeys")
    public String[] tagKeys;
    public RemoveTagsFromStreamInput withTagKeys(String[] tagKeys) {
        this.tagKeys = tagKeys;
        return this;
    }
}