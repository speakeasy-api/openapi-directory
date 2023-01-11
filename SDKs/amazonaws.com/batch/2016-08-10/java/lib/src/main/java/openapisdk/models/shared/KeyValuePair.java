package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * KeyValuePair
 * A key-value pair object.
**/
public class KeyValuePair {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public KeyValuePair withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public KeyValuePair withValue(String value) {
        this.value = value;
        return this;
    }
}