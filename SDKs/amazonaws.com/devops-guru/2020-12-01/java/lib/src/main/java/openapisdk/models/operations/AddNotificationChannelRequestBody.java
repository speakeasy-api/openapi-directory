package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AddNotificationChannelRequestBody {
    @JsonProperty("Config")
    public AddNotificationChannelRequestBodyConfig config;
    public AddNotificationChannelRequestBody withConfig(AddNotificationChannelRequestBodyConfig config) {
        this.config = config;
        return this;
    }
}