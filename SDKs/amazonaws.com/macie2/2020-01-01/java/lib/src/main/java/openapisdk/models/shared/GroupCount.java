package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GroupCount
 * Provides a group of results for a query that retrieved aggregated statistical data about findings.
**/
public class GroupCount {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public Long count;
    public GroupCount withCount(Long count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupKey")
    public String groupKey;
    public GroupCount withGroupKey(String groupKey) {
        this.groupKey = groupKey;
        return this;
    }
}