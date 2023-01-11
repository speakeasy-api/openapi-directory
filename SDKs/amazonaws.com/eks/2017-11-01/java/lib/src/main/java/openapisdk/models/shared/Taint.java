package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Taint
 * A property that allows a node to repel a set of pods.
**/
public class Taint {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("effect")
    public TaintEffectEnum effect;
    public Taint withEffect(TaintEffectEnum effect) {
        this.effect = effect;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public Taint withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public Taint withValue(String value) {
        this.value = value;
        return this;
    }
}