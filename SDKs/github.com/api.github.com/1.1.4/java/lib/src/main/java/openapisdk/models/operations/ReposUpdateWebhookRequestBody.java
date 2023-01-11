package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReposUpdateWebhookRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public ReposUpdateWebhookRequestBody withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("add_events")
    public String[] addEvents;
    public ReposUpdateWebhookRequestBody withAddEvents(String[] addEvents) {
        this.addEvents = addEvents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("config")
    public ReposUpdateWebhookRequestBodyConfig config;
    public ReposUpdateWebhookRequestBody withConfig(ReposUpdateWebhookRequestBodyConfig config) {
        this.config = config;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("events")
    public String[] events;
    public ReposUpdateWebhookRequestBody withEvents(String[] events) {
        this.events = events;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remove_events")
    public String[] removeEvents;
    public ReposUpdateWebhookRequestBody withRemoveEvents(String[] removeEvents) {
        this.removeEvents = removeEvents;
        return this;
    }
}