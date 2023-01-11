package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddProfileKeyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KeyName")
    public String keyName;
    public AddProfileKeyResponse withKeyName(String keyName) {
        this.keyName = keyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Values")
    public String[] values;
    public AddProfileKeyResponse withValues(String[] values) {
        this.values = values;
        return this;
    }
}