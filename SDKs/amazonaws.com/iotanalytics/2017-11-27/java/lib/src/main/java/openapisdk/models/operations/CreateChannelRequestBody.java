package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateChannelRequestBody {
    @JsonProperty("channelName")
    public String channelName;
    public CreateChannelRequestBody withChannelName(String channelName) {
        this.channelName = channelName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelStorage")
    public CreateChannelRequestBodyChannelStorage channelStorage;
    public CreateChannelRequestBody withChannelStorage(CreateChannelRequestBodyChannelStorage channelStorage) {
        this.channelStorage = channelStorage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("retentionPeriod")
    public CreateChannelRequestBodyRetentionPeriod retentionPeriod;
    public CreateChannelRequestBody withRetentionPeriod(CreateChannelRequestBodyRetentionPeriod retentionPeriod) {
        this.retentionPeriod = retentionPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public openapisdk.models.shared.Tag[] tags;
    public CreateChannelRequestBody withTags(openapisdk.models.shared.Tag[] tags) {
        this.tags = tags;
        return this;
    }
}