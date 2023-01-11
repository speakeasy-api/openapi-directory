package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TagStreamRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StreamARN")
    public String streamARN;
    public TagStreamRequestBody withStreamArn(String streamARN) {
        this.streamARN = streamARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StreamName")
    public String streamName;
    public TagStreamRequestBody withStreamName(String streamName) {
        this.streamName = streamName;
        return this;
    }
    @JsonProperty("Tags")
    public java.util.Map<String, String> tags;
    public TagStreamRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}