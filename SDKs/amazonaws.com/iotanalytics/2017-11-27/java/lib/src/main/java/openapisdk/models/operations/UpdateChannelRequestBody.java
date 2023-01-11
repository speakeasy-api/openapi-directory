package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateChannelRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelStorage")
    public UpdateChannelRequestBodyChannelStorage channelStorage;
    public UpdateChannelRequestBody withChannelStorage(UpdateChannelRequestBodyChannelStorage channelStorage) {
        this.channelStorage = channelStorage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("retentionPeriod")
    public UpdateChannelRequestBodyRetentionPeriod retentionPeriod;
    public UpdateChannelRequestBody withRetentionPeriod(UpdateChannelRequestBodyRetentionPeriod retentionPeriod) {
        this.retentionPeriod = retentionPeriod;
        return this;
    }
}