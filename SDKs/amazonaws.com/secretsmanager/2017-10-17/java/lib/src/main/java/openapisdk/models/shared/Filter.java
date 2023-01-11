package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Filter
 * Allows you to add filters when you use the search function in Secrets Manager.
**/
public class Filter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Key")
    public FilterNameStringTypeEnum key;
    public Filter withKey(FilterNameStringTypeEnum key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Values")
    public String[] values;
    public Filter withValues(String[] values) {
        this.values = values;
        return this;
    }
}