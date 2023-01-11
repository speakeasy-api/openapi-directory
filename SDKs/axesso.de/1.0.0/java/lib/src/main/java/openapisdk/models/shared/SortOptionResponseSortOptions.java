package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SortOptionResponseSortOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order")
    public Long order;
    public SortOptionResponseSortOptions withOrder(Long order) {
        this.order = order;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortName")
    public String sortName;
    public SortOptionResponseSortOptions withSortName(String sortName) {
        this.sortName = sortName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("strategy")
    public String strategy;
    public SortOptionResponseSortOptions withStrategy(String strategy) {
        this.strategy = strategy;
        return this;
    }
}