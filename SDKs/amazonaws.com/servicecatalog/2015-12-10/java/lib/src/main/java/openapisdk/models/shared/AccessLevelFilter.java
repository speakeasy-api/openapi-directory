package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccessLevelFilter
 * The access level to use to filter results.
**/
public class AccessLevelFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Key")
    public AccessLevelFilterKeyEnum key;
    public AccessLevelFilter withKey(AccessLevelFilterKeyEnum key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Value")
    public String value;
    public AccessLevelFilter withValue(String value) {
        this.value = value;
        return this;
    }
}