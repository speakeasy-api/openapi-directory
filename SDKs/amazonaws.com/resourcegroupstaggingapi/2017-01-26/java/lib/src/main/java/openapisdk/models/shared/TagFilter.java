package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TagFilter
 * A list of tags (keys and values) that are used to specify the associated resources.
**/
public class TagFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Key")
    public String key;
    public TagFilter withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Values")
    public String[] values;
    public TagFilter withValues(String[] values) {
        this.values = values;
        return this;
    }
}