package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Scope
 * This data type contains key-value pairs that identify various Amazon resources.
**/
public class Scope {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public ScopeTypeEnum key;
    public Scope withKey(ScopeTypeEnum key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public Scope withValue(String value) {
        this.value = value;
        return this;
    }
}