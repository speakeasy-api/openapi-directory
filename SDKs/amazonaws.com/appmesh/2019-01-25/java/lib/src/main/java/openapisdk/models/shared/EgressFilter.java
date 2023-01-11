package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * EgressFilter
 * An object that represents the egress filter rules for a service mesh.
**/
public class EgressFilter {
    @JsonProperty("type")
    public EgressFilterTypeEnum type;
    public EgressFilter withType(EgressFilterTypeEnum type) {
        this.type = type;
        return this;
    }
}