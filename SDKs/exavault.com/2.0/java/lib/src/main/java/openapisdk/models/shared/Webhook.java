package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Webhook {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public WebhookAttributes attributes;
    public Webhook withAttributes(WebhookAttributes attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public Webhook withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relationships")
    public WebhookRelationships relationships;
    public Webhook withRelationships(WebhookRelationships relationships) {
        this.relationships = relationships;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public Webhook withType(String type) {
        this.type = type;
        return this;
    }
}