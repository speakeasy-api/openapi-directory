package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InsightImpactGraphEdge
 * The connection between two service in an insight impact graph.
**/
public class InsightImpactGraphEdge {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReferenceId")
    public Long referenceId;
    public InsightImpactGraphEdge withReferenceId(Long referenceId) {
        this.referenceId = referenceId;
        return this;
    }
}