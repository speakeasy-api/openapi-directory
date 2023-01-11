package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListKeysResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Keys")
    public KeyListEntry[] keys;
    public ListKeysResponse withKeys(KeyListEntry[] keys) {
        this.keys = keys;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextMarker")
    public String nextMarker;
    public ListKeysResponse withNextMarker(String nextMarker) {
        this.nextMarker = nextMarker;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Truncated")
    public Boolean truncated;
    public ListKeysResponse withTruncated(Boolean truncated) {
        this.truncated = truncated;
        return this;
    }
}