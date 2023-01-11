package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReportByProductLinks
 * Depending if the report concerned multiple channels or one channel.
**/
public class ReportByProductLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allChannelsLinks")
    public ReportByProductAllChannelsLinks allChannelsLinks;
    public ReportByProductLinks withAllChannelsLinks(ReportByProductAllChannelsLinks allChannelsLinks) {
        this.allChannelsLinks = allChannelsLinks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oneChannelLinks")
    public ReportByProductOneChannelLinks oneChannelLinks;
    public ReportByProductLinks withOneChannelLinks(ReportByProductOneChannelLinks oneChannelLinks) {
        this.oneChannelLinks = oneChannelLinks;
        return this;
    }
}