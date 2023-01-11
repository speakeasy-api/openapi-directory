package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AbortConfig
 * The criteria that determine when and how a job abort takes place.
**/
public class AbortConfig {
    @JsonProperty("criteriaList")
    public AbortCriteria[] criteriaList;
    public AbortConfig withCriteriaList(AbortCriteria[] criteriaList) {
        this.criteriaList = criteriaList;
        return this;
    }
}