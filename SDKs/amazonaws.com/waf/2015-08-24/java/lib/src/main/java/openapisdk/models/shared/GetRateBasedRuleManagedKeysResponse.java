package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetRateBasedRuleManagedKeysResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ManagedKeys")
    public String[] managedKeys;
    public GetRateBasedRuleManagedKeysResponse withManagedKeys(String[] managedKeys) {
        this.managedKeys = managedKeys;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextMarker")
    public String nextMarker;
    public GetRateBasedRuleManagedKeysResponse withNextMarker(String nextMarker) {
        this.nextMarker = nextMarker;
        return this;
    }
}