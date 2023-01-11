package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ScriptParameterKeyValue
 * A parameter for a studio component script, in the form of a key:value pair.
**/
public class ScriptParameterKeyValue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public ScriptParameterKeyValue withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public ScriptParameterKeyValue withValue(String value) {
        this.value = value;
        return this;
    }
}