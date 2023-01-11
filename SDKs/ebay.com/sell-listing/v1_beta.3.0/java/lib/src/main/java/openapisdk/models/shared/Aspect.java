package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Aspect
 * The type that defines the fields for the item aspects.
**/
public class Aspect {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Aspect withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("values")
    public String[] values;
    public Aspect withValues(String[] values) {
        this.values = values;
        return this;
    }
}