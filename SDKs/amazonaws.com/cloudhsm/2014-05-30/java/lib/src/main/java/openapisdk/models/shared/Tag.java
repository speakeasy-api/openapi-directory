package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Tag
 * A key-value pair that identifies or specifies metadata about an AWS CloudHSM resource.
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