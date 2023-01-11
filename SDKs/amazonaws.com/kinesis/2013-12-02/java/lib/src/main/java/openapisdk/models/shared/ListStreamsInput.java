package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListStreamsInput
 * Represents the input for <code>ListStreams</code>.
**/
public class ListStreamsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExclusiveStartStreamName")
    public String exclusiveStartStreamName;
    public ListStreamsInput withExclusiveStartStreamName(String exclusiveStartStreamName) {
        this.exclusiveStartStreamName = exclusiveStartStreamName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Limit")
    public Long limit;
    public ListStreamsInput withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
}