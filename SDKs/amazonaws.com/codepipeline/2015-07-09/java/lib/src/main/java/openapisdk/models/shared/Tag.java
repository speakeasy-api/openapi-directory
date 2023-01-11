package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Tag
 * A tag is a key-value pair that is used to manage the resource.
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