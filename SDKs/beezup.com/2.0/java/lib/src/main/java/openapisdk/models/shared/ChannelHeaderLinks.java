package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChannelHeaderLinks
 * The links related to an available channel
**/
public class ChannelHeaderLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("self")
    public LinksGetChannelInfoLink self;
    public ChannelHeaderLinks withSelf(LinksGetChannelInfoLink self) {
        this.self = self;
        return this;
    }
}