package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateEventIntegrationRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientToken")
    public String clientToken;
    public CreateEventIntegrationRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public CreateEventIntegrationRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("EventBridgeBus")
    public String eventBridgeBus;
    public CreateEventIntegrationRequestBody withEventBridgeBus(String eventBridgeBus) {
        this.eventBridgeBus = eventBridgeBus;
        return this;
    }
    @JsonProperty("EventFilter")
    public CreateEventIntegrationRequestBodyEventFilter eventFilter;
    public CreateEventIntegrationRequestBody withEventFilter(CreateEventIntegrationRequestBodyEventFilter eventFilter) {
        this.eventFilter = eventFilter;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public CreateEventIntegrationRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public java.util.Map<String, String> tags;
    public CreateEventIntegrationRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}