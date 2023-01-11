package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DisassociateMacSecKeyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectionId")
    public String connectionId;
    public DisassociateMacSecKeyResponse withConnectionId(String connectionId) {
        this.connectionId = connectionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("macSecKeys")
    public MacSecKey[] macSecKeys;
    public DisassociateMacSecKeyResponse withMacSecKeys(MacSecKey[] macSecKeys) {
        this.macSecKeys = macSecKeys;
        return this;
    }
}