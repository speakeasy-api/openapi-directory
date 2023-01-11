package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ChannelDetails {
    @JsonProperty("channelId")
    public String channelId;
    public ChannelDetails withChannelId(String channelId) {
        this.channelId = channelId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isGlobalMaster")
    public Boolean isGlobalMaster;
    public ChannelDetails withIsGlobalMaster(Boolean isGlobalMaster) {
        this.isGlobalMaster = isGlobalMaster;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public String region;
    public ChannelDetails withRegion(String region) {
        this.region = region;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ChannelStatus status;
    public ChannelDetails withStatus(ChannelStatus status) {
        this.status = status;
        return this;
    }
}