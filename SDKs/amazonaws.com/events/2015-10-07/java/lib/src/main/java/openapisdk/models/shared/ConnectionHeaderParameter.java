package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConnectionHeaderParameter
 * Additional parameter included in the header. You can include up to 100 additional header parameters per request. An event payload cannot exceed 64 KB.
**/
public class ConnectionHeaderParameter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IsValueSecret")
    public Boolean isValueSecret;
    public ConnectionHeaderParameter withIsValueSecret(Boolean isValueSecret) {
        this.isValueSecret = isValueSecret;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Key")
    public String key;
    public ConnectionHeaderParameter withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Value")
    public String value;
    public ConnectionHeaderParameter withValue(String value) {
        this.value = value;
        return this;
    }
}