package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Entity
 * An entity contains data that describes your product, its supported features, and how it can be used or launched by your customer. 
**/
public class Entity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Identifier")
    public String identifier;
    public Entity withIdentifier(String identifier) {
        this.identifier = identifier;
        return this;
    }
    @JsonProperty("Type")
    public String type;
    public Entity withType(String type) {
        this.type = type;
        return this;
    }
}