package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OrganicResult
 * The result of a organic search request
**/
public class OrganicResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public Long count;
    public OrganicResult withCount(Long count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public java.util.Map<String, Object>[] items;
    public OrganicResult withItems(java.util.Map<String, Object>[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Long total;
    public OrganicResult withTotal(Long total) {
        this.total = total;
        return this;
    }
}