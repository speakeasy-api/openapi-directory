package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChannelActivity
 * The activity that determines the source of the messages to be processed.
**/
public class ChannelActivity {
    @JsonProperty("channelName")
    public String channelName;
    public ChannelActivity withChannelName(String channelName) {
        this.channelName = channelName;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public ChannelActivity withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public String next;
    public ChannelActivity withNext(String next) {
        this.next = next;
        return this;
    }
}