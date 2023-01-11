package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AddNotificationChannelsRequestBody {
    @JsonProperty("channels")
    public openapisdk.models.shared.Channel[] channels;
    public AddNotificationChannelsRequestBody withChannels(openapisdk.models.shared.Channel[] channels) {
        this.channels = channels;
        return this;
    }
}