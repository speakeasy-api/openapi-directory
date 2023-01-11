package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MeshSpec
 * An object that represents the specification of a service mesh.
**/
public class MeshSpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("egressFilter")
    public EgressFilter egressFilter;
    public MeshSpec withEgressFilter(EgressFilter egressFilter) {
        this.egressFilter = egressFilter;
        return this;
    }
}