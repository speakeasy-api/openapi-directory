package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SDKKeysModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primary")
    public String primary;
    public SDKKeysModel withPrimary(String primary) {
        this.primary = primary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secondary")
    public String secondary;
    public SDKKeysModel withSecondary(String secondary) {
        this.secondary = secondary;
        return this;
    }
}