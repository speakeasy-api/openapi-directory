package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConnectionQueryStringParameter
 * Additional query string parameter for the connection. You can include up to 100 additional query string parameters per request. Each additional parameter counts towards the event payload size, which cannot exceed 64 KB.
**/
public class ConnectionQueryStringParameter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IsValueSecret")
    public Boolean isValueSecret;
    public ConnectionQueryStringParameter withIsValueSecret(Boolean isValueSecret) {
        this.isValueSecret = isValueSecret;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Key")
    public String key;
    public ConnectionQueryStringParameter withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Value")
    public String value;
    public ConnectionQueryStringParameter withValue(String value) {
        this.value = value;
        return this;
    }
}