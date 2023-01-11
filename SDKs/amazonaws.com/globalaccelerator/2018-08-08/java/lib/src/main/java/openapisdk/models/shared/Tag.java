package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Tag
 * A complex type that contains a <code>Tag</code> key and <code>Tag</code> value.
**/
public class Tag {
    @JsonProperty("Key")
    public String key;
    public Tag withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonProperty("Value")
    public String value;
    public Tag withValue(String value) {
        this.value = value;
        return this;
    }
}