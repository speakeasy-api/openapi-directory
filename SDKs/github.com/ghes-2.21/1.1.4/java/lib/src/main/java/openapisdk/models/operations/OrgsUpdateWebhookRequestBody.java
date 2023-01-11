package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrgsUpdateWebhookRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public OrgsUpdateWebhookRequestBody withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("config")
    public OrgsUpdateWebhookRequestBodyConfig config;
    public OrgsUpdateWebhookRequestBody withConfig(OrgsUpdateWebhookRequestBodyConfig config) {
        this.config = config;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("events")
    public String[] events;
    public OrgsUpdateWebhookRequestBody withEvents(String[] events) {
        this.events = events;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public OrgsUpdateWebhookRequestBody withName(String name) {
        this.name = name;
        return this;
    }
}