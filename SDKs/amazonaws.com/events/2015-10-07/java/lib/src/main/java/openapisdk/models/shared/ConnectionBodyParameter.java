package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConnectionBodyParameter
 * Additional parameter included in the body. You can include up to 100 additional body parameters per request. An event payload cannot exceed 64 KB.
**/
public class ConnectionBodyParameter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IsValueSecret")
    public Boolean isValueSecret;
    public ConnectionBodyParameter withIsValueSecret(Boolean isValueSecret) {
        this.isValueSecret = isValueSecret;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Key")
    public String key;
    public ConnectionBodyParameter withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Value")
    public String value;
    public ConnectionBodyParameter withValue(String value) {
        this.value = value;
        return this;
    }
}