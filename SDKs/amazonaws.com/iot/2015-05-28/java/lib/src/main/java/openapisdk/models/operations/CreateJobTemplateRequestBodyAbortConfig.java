package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateJobTemplateRequestBodyAbortConfig
 * The criteria that determine when and how a job abort takes place.
**/
public class CreateJobTemplateRequestBodyAbortConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("criteriaList")
    public openapisdk.models.shared.AbortCriteria[] criteriaList;
    public CreateJobTemplateRequestBodyAbortConfig withCriteriaList(openapisdk.models.shared.AbortCriteria[] criteriaList) {
        this.criteriaList = criteriaList;
        return this;
    }
}