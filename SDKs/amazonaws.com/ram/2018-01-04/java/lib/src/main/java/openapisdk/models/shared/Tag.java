package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Tag
 * Information about a tag.
**/
public class Tag {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public Tag withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public Tag withValue(String value) {
        this.value = value;
        return this;
    }
}