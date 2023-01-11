package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Tag
 * A description of a resource tag.
**/
public class Tag {
    @JsonProperty("key")
    public String key;
    public Tag withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonProperty("value")
    public String value;
    public Tag withValue(String value) {
        this.value = value;
        return this;
    }
}