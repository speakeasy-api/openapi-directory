package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FindingCriteria
 * Specifies, as a map, one or more property-based conditions that filter the results of a query for findings.
**/
public class FindingCriteria {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("criterion")
    public java.util.Map<String, CriterionAdditionalProperties> criterion;
    public FindingCriteria withCriterion(java.util.Map<String, CriterionAdditionalProperties> criterion) {
        this.criterion = criterion;
        return this;
    }
}