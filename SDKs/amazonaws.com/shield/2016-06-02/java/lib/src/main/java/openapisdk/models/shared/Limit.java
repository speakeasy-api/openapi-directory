package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Limit
 * Specifies how many protections of a given type you can create.
**/
public class Limit {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Max")
    public Long max;
    public Limit withMax(Long max) {
        this.max = max;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public String type;
    public Limit withType(String type) {
        this.type = type;
        return this;
    }
}