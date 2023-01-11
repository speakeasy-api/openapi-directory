package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EmailList
 * A single email group list
**/
public class EmailList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public EmailListAttributes attributes;
    public EmailList withAttributes(EmailListAttributes attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public EmailList withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relationships")
    public EmailListRelationships relationships;
    public EmailList withRelationships(EmailListRelationships relationships) {
        this.relationships = relationships;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public EmailList withType(String type) {
        this.type = type;
        return this;
    }
}