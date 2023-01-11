package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListNotificationChannelsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Channels")
    public NotificationChannel[] channels;
    public ListNotificationChannelsResponse withChannels(NotificationChannel[] channels) {
        this.channels = channels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListNotificationChannelsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}