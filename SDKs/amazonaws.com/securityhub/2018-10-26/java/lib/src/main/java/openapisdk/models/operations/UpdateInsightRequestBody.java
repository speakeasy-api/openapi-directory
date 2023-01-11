package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateInsightRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Filters")
    public UpdateInsightRequestBodyFilters filters;
    public UpdateInsightRequestBody withFilters(UpdateInsightRequestBodyFilters filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GroupByAttribute")
    public String groupByAttribute;
    public UpdateInsightRequestBody withGroupByAttribute(String groupByAttribute) {
        this.groupByAttribute = groupByAttribute;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public UpdateInsightRequestBody withName(String name) {
        this.name = name;
        return this;
    }
}