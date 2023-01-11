package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TagFilter
 * The tag filter. Valid names are: <code>tagKey</code>, <code>tagValue</code>, <code>configurationId</code>.
**/
public class TagFilter {
    @JsonProperty("name")
    public String name;
    public TagFilter withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("values")
    public String[] values;
    public TagFilter withValues(String[] values) {
        this.values = values;
        return this;
    }
}