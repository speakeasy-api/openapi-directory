package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * KeyListEntry
 * Contains information about each entry in the key list.
**/
public class KeyListEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KeyArn")
    public String keyArn;
    public KeyListEntry withKeyArn(String keyArn) {
        this.keyArn = keyArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KeyId")
    public String keyId;
    public KeyListEntry withKeyId(String keyId) {
        this.keyId = keyId;
        return this;
    }
}