package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StreamKeySummary
 * Summary information about a stream key.
**/
public class StreamKeySummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arn")
    public String arn;
    public StreamKeySummary withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelArn")
    public String channelArn;
    public StreamKeySummary withChannelArn(String channelArn) {
        this.channelArn = channelArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public StreamKeySummary withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}