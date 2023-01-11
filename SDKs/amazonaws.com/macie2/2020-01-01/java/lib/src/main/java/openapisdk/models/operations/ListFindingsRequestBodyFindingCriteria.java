package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListFindingsRequestBodyFindingCriteria
 * Specifies, as a map, one or more property-based conditions that filter the results of a query for findings.
**/
public class ListFindingsRequestBodyFindingCriteria {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("criterion")
    public java.util.Map<String, openapisdk.models.shared.CriterionAdditionalProperties> criterion;
    public ListFindingsRequestBodyFindingCriteria withCriterion(java.util.Map<String, openapisdk.models.shared.CriterionAdditionalProperties> criterion) {
        this.criterion = criterion;
        return this;
    }
}