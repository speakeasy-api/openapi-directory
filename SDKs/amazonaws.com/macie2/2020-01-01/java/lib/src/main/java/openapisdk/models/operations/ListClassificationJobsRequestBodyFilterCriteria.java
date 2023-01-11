package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListClassificationJobsRequestBodyFilterCriteria
 * Specifies criteria for filtering the results of a request for information about classification jobs.
**/
public class ListClassificationJobsRequestBodyFilterCriteria {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludes")
    public openapisdk.models.shared.ListJobsFilterTerm[] excludes;
    public ListClassificationJobsRequestBodyFilterCriteria withExcludes(openapisdk.models.shared.ListJobsFilterTerm[] excludes) {
        this.excludes = excludes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includes")
    public openapisdk.models.shared.ListJobsFilterTerm[] includes;
    public ListClassificationJobsRequestBodyFilterCriteria withIncludes(openapisdk.models.shared.ListJobsFilterTerm[] includes) {
        this.includes = includes;
        return this;
    }
}