package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Insight
 * Contains information about a Security Hub insight.
**/
public class Insight {
    @JsonProperty("Filters")
    public AwsSecurityFindingFilters filters;
    public Insight withFilters(AwsSecurityFindingFilters filters) {
        this.filters = filters;
        return this;
    }
    @JsonProperty("GroupByAttribute")
    public String groupByAttribute;
    public Insight withGroupByAttribute(String groupByAttribute) {
        this.groupByAttribute = groupByAttribute;
        return this;
    }
    @JsonProperty("InsightArn")
    public String insightArn;
    public Insight withInsightArn(String insightArn) {
        this.insightArn = insightArn;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public Insight withName(String name) {
        this.name = name;
        return this;
    }
}