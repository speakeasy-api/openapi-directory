package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Form
 * Regular form object.
**/
public class Form {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public FormAttributes attributes;
    public Form withAttributes(FormAttributes attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public Form withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relationships")
    public FormRelationships relationships;
    public Form withRelationships(FormRelationships relationships) {
        this.relationships = relationships;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public Form withType(String type) {
        this.type = type;
        return this;
    }
}