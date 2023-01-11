package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RecordTag
 * Information about a tag, which is a key-value pair.
**/
public class RecordTag {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Key")
    public String key;
    public RecordTag withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Value")
    public String value;
    public RecordTag withValue(String value) {
        this.value = value;
        return this;
    }
}