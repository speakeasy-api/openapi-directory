package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SearchInsightsRequestBodyFilters
 *  Specifies one or more severity values and one or more status values that are used to search for insights. 
**/
public class SearchInsightsRequestBodyFilters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceCollection")
    public openapisdk.models.shared.ResourceCollection resourceCollection;
    public SearchInsightsRequestBodyFilters withResourceCollection(openapisdk.models.shared.ResourceCollection resourceCollection) {
        this.resourceCollection = resourceCollection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServiceCollection")
    public openapisdk.models.shared.ServiceCollection serviceCollection;
    public SearchInsightsRequestBodyFilters withServiceCollection(openapisdk.models.shared.ServiceCollection serviceCollection) {
        this.serviceCollection = serviceCollection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Severities")
    public openapisdk.models.shared.InsightSeverityEnum[] severities;
    public SearchInsightsRequestBodyFilters withSeverities(openapisdk.models.shared.InsightSeverityEnum[] severities) {
        this.severities = severities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Statuses")
    public openapisdk.models.shared.InsightStatusEnum[] statuses;
    public SearchInsightsRequestBodyFilters withStatuses(openapisdk.models.shared.InsightStatusEnum[] statuses) {
        this.statuses = statuses;
        return this;
    }
}