package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeBucketsRequestBodySortCriteria
 * Specifies criteria for sorting the results of a query for information about S3 buckets.
**/
public class DescribeBucketsRequestBodySortCriteria {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributeName")
    public String attributeName;
    public DescribeBucketsRequestBodySortCriteria withAttributeName(String attributeName) {
        this.attributeName = attributeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderBy")
    public openapisdk.models.shared.OrderByEnum orderBy;
    public DescribeBucketsRequestBodySortCriteria withOrderBy(openapisdk.models.shared.OrderByEnum orderBy) {
        this.orderBy = orderBy;
        return this;
    }
}