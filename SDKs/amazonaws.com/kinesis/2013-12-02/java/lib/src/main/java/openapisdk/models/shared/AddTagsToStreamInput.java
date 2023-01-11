package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AddTagsToStreamInput
 * Represents the input for <code>AddTagsToStream</code>.
**/
public class AddTagsToStreamInput {
    @JsonProperty("StreamName")
    public String streamName;
    public AddTagsToStreamInput withStreamName(String streamName) {
        this.streamName = streamName;
        return this;
    }
    @JsonProperty("Tags")
    public java.util.Map<String, String> tags;
    public AddTagsToStreamInput withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}