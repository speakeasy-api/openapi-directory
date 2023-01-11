package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListTagsForStreamInput
 * Represents the input for <code>ListTagsForStream</code>.
**/
public class ListTagsForStreamInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExclusiveStartTagKey")
    public String exclusiveStartTagKey;
    public ListTagsForStreamInput withExclusiveStartTagKey(String exclusiveStartTagKey) {
        this.exclusiveStartTagKey = exclusiveStartTagKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Limit")
    public Long limit;
    public ListTagsForStreamInput withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @JsonProperty("StreamName")
    public String streamName;
    public ListTagsForStreamInput withStreamName(String streamName) {
        this.streamName = streamName;
        return this;
    }
}