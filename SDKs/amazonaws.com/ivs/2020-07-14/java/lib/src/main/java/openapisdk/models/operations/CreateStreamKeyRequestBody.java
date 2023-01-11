package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateStreamKeyRequestBody {
    @JsonProperty("channelArn")
    public String channelArn;
    public CreateStreamKeyRequestBody withChannelArn(String channelArn) {
        this.channelArn = channelArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateStreamKeyRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}