package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Attribute
 * This data type is used in the <a>ImageScanFinding</a> data type.
**/
public class Attribute {
    @JsonProperty("key")
    public String key;
    public Attribute withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public Attribute withValue(String value) {
        this.value = value;
        return this;
    }
}