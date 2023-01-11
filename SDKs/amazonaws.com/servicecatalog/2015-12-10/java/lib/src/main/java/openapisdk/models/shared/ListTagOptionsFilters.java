package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListTagOptionsFilters
 * Filters to use when listing TagOptions.
**/
public class ListTagOptionsFilters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Active")
    public Boolean active;
    public ListTagOptionsFilters withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Key")
    public String key;
    public ListTagOptionsFilters withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Value")
    public String value;
    public ListTagOptionsFilters withValue(String value) {
        this.value = value;
        return this;
    }
}