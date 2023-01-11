package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SearchResourcesRequestBodyBucketCriteria
 * Specifies property- and tag-based conditions that define filter criteria for including or excluding S3 buckets from the query results. Exclude conditions take precedence over include conditions.
**/
public class SearchResourcesRequestBodyBucketCriteria {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludes")
    public openapisdk.models.shared.SearchResourcesCriteriaBlock excludes;
    public SearchResourcesRequestBodyBucketCriteria withExcludes(openapisdk.models.shared.SearchResourcesCriteriaBlock excludes) {
        this.excludes = excludes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includes")
    public openapisdk.models.shared.SearchResourcesCriteriaBlock includes;
    public SearchResourcesRequestBodyBucketCriteria withIncludes(openapisdk.models.shared.SearchResourcesCriteriaBlock includes) {
        this.includes = includes;
        return this;
    }
}