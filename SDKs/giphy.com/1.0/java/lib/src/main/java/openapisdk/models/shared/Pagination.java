package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Pagination
 * The Pagination Object contains information relating to the number of total results available as well as the number of results fetched and their relative positions.
 * 
**/
public class Pagination {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public Integer count;
    public Pagination withCount(Integer count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offset")
    public Integer offset;
    public Pagination withOffset(Integer offset) {
        this.offset = offset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_count")
    public Integer totalCount;
    public Pagination withTotalCount(Integer totalCount) {
        this.totalCount = totalCount;
        return this;
    }
}