package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Filter
 * The constraints that you want all returned products to match.
**/
public class Filter {
    @JsonProperty("Field")
    public String field;
    public Filter withField(String field) {
        this.field = field;
        return this;
    }
    @JsonProperty("Type")
    public FilterTypeEnum type;
    public Filter withType(FilterTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonProperty("Value")
    public String value;
    public Filter withValue(String value) {
        this.value = value;
        return this;
    }
}