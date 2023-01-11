package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NotificationConfiguration
 * The configuration for notifications stored for each profiling group. This includes up to to two channels and a list of event publishers associated with each channel.
**/
public class NotificationConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channels")
    public Channel[] channels;
    public NotificationConfiguration withChannels(Channel[] channels) {
        this.channels = channels;
        return this;
    }
}