package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UntagStreamRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StreamARN")
    public String streamARN;
    public UntagStreamRequestBody withStreamArn(String streamARN) {
        this.streamARN = streamARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StreamName")
    public String streamName;
    public UntagStreamRequestBody withStreamName(String streamName) {
        this.streamName = streamName;
        return this;
    }
    @JsonProperty("TagKeyList")
    public String[] tagKeyList;
    public UntagStreamRequestBody withTagKeyList(String[] tagKeyList) {
        this.tagKeyList = tagKeyList;
        return this;
    }
}