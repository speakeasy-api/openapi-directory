package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Filter
 * Used to streamline results of a search based on the property being filtered.
**/
public class Filter {
    @JsonProperty("Name")
    public String name;
    public Filter withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("Values")
    public String[] values;
    public Filter withValues(String[] values) {
        this.values = values;
        return this;
    }
}