package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateEventBusRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventSourceName")
    public String eventSourceName;
    public CreateEventBusRequest withEventSourceName(String eventSourceName) {
        this.eventSourceName = eventSourceName;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public CreateEventBusRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public CreateEventBusRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}