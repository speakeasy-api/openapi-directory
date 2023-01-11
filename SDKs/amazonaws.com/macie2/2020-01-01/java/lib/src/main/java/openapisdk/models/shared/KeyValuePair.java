package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * KeyValuePair
 * Provides information about the tags that are associated with an S3 bucket or object. Each tag consists of a required tag key and an associated tag value.
**/
public class KeyValuePair {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public KeyValuePair withKey(String key) {
        this.key = key;
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