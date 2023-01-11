package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateMeshRequestBodySpec
 * An object that represents the specification of a service mesh.
**/
public class UpdateMeshRequestBodySpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("egressFilter")
    public openapisdk.models.shared.EgressFilter egressFilter;
    public UpdateMeshRequestBodySpec withEgressFilter(openapisdk.models.shared.EgressFilter egressFilter) {
        this.egressFilter = egressFilter;
        return this;
    }
}