package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TagFilter
 * Used to filter information based on tags.
**/
public class TagFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tagKey")
    public String tagKey;
    public TagFilter withTagKey(String tagKey) {
        this.tagKey = tagKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tagValues")
    public String[] tagValues;
    public TagFilter withTagValues(String[] tagValues) {
        this.tagValues = tagValues;
        return this;
    }
}