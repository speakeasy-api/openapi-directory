package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class KeysAndAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AttributesToGet")
    public String[] attributesToGet;
    public KeysAndAttributes withAttributesToGet(String[] attributesToGet) {
        this.attributesToGet = attributesToGet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConsistentRead")
    public Boolean consistentRead;
    public KeysAndAttributes withConsistentRead(Boolean consistentRead) {
        this.consistentRead = consistentRead;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Keys")
    public Key[] keys;
    public KeysAndAttributes withKeys(Key[] keys) {
        this.keys = keys;
        return this;
    }
}