package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * BeezUpCommonChannelBasicInfo
 * The basic info related to a channel
**/
public class BeezUpCommonChannelBasicInfo {
    @JsonProperty("channelId")
    public String channelId;
    public BeezUpCommonChannelBasicInfo withChannelId(String channelId) {
        this.channelId = channelId;
        return this;
    }
    @JsonProperty("channelImageUrl")
    public String channelImageUrl;
    public BeezUpCommonChannelBasicInfo withChannelImageUrl(String channelImageUrl) {
        this.channelImageUrl = channelImageUrl;
        return this;
    }
    @JsonProperty("channelName")
    public String channelName;
    public BeezUpCommonChannelBasicInfo withChannelName(String channelName) {
        this.channelName = channelName;
        return this;
    }
}