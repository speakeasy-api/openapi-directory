/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ChannelDetails - OK
 */
public class ChannelDetails {
    /**
     * The required name of the channel including any qualifier, if any.
     */
    @JsonProperty("channelId")
    public String channelId;

    public ChannelDetails withChannelId(String channelId) {
        this.channelId = channelId;
        return this;
    }
    
    /**
     * In events relating to the activity of a channel in a specific region, this optionally identifies whether or not that region is responsible for global coordination of the channel.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isGlobalMaster")
    public Boolean isGlobalMaster;

    public ChannelDetails withIsGlobalMaster(Boolean isGlobalMaster) {
        this.isGlobalMaster = isGlobalMaster;
        return this;
    }
    
    /**
     * In events relating to the activity of a channel in a specific region, this optionally identifies the region.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public String region;

    public ChannelDetails withRegion(String region) {
        this.region = region;
        return this;
    }
    
    /**
     * A ChannelStatus instance.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ChannelStatus status;

    public ChannelDetails withStatus(ChannelStatus status) {
        this.status = status;
        return this;
    }
    
    public ChannelDetails(@JsonProperty("channelId") String channelId) {
        this.channelId = channelId;
  }
}
