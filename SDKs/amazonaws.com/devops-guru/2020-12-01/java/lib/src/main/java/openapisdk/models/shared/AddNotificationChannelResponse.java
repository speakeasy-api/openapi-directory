package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AddNotificationChannelResponse {
    @JsonProperty("Id")
    public String id;
    public AddNotificationChannelResponse withId(String id) {
        this.id = id;
        return this;
    }
}