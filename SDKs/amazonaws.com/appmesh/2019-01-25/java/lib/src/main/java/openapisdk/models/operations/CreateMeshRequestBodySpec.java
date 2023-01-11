package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateMeshRequestBodySpec
 * An object that represents the specification of a service mesh.
**/
public class CreateMeshRequestBodySpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("egressFilter")
    public openapisdk.models.shared.EgressFilter egressFilter;
    public CreateMeshRequestBodySpec withEgressFilter(openapisdk.models.shared.EgressFilter egressFilter) {
        this.egressFilter = egressFilter;
        return this;
    }
}