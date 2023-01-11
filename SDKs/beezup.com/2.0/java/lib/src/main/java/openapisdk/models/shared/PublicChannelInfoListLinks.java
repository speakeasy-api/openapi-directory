package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PublicChannelInfoListLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("self")
    public LinksGetChannelsLink self;
    public PublicChannelInfoListLinks withSelf(LinksGetChannelsLink self) {
        this.self = self;
        return this;
    }
}