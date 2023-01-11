package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WebhookActivityEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public Object attributes;
    public WebhookActivityEntry withAttributes(Object attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public WebhookActivityEntry withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public WebhookActivityEntryTypeEnum type;
    public WebhookActivityEntry withType(WebhookActivityEntryTypeEnum type) {
        this.type = type;
        return this;
    }
}