package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Notification
 * Object containing notification properties.
**/
public class Notification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public NotificationAttributes attributes;
    public Notification withAttributes(NotificationAttributes attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public Notification withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relationships")
    public NotificationRelationships relationships;
    public Notification withRelationships(NotificationRelationships relationships) {
        this.relationships = relationships;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public Notification withType(String type) {
        this.type = type;
        return this;
    }
}