package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateInsightRequestBody {
    @JsonProperty("Filters")
    public CreateInsightRequestBodyFilters filters;
    public CreateInsightRequestBody withFilters(CreateInsightRequestBodyFilters filters) {
        this.filters = filters;
        return this;
    }
    @JsonProperty("GroupByAttribute")
    public String groupByAttribute;
    public CreateInsightRequestBody withGroupByAttribute(String groupByAttribute) {
        this.groupByAttribute = groupByAttribute;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public CreateInsightRequestBody withName(String name) {
        this.name = name;
        return this;
    }
}