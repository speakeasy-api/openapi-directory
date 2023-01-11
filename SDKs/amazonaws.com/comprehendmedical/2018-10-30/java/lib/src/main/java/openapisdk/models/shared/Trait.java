package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Trait
 *  Provides contextual information about the extracted entity. 
**/
public class Trait {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public AttributeNameEnum name;
    public Trait withName(AttributeNameEnum name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Score")
    public Float score;
    public Trait withScore(Float score) {
        this.score = score;
        return this;
    }
}