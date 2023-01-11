package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Credit
 * A credit links a specific person to a series, season, or episode in a specific role.
 * 
**/
public class Credit {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public CreditAttributes attributes;
    public Credit withAttributes(CreditAttributes attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Credit withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relationships")
    public CreditRelationships relationships;
    public Credit withRelationships(CreditRelationships relationships) {
        this.relationships = relationships;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public Credit withType(String type) {
        this.type = type;
        return this;
    }
}