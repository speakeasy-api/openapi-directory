package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MinimumHealthyHosts
 * Information about minimum healthy instance.
**/
public class MinimumHealthyHosts {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public MinimumHealthyHostsTypeEnum type;
    public MinimumHealthyHosts withType(MinimumHealthyHostsTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public Long value;
    public MinimumHealthyHosts withValue(Long value) {
        this.value = value;
        return this;
    }
}