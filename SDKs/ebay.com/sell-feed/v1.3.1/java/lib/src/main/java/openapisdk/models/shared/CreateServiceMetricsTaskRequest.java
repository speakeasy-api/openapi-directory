package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateServiceMetricsTaskRequest
 * The type that defines the fields for the Customer Service Metric reports generated with the Feed API.
**/
public class CreateServiceMetricsTaskRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("feedType")
    public String feedType;
    public CreateServiceMetricsTaskRequest withFeedType(String feedType) {
        this.feedType = feedType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filterCriteria")
    public CustomerServiceMetricsFilterCriteria filterCriteria;
    public CreateServiceMetricsTaskRequest withFilterCriteria(CustomerServiceMetricsFilterCriteria filterCriteria) {
        this.filterCriteria = filterCriteria;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schemaVersion")
    public String schemaVersion;
    public CreateServiceMetricsTaskRequest withSchemaVersion(String schemaVersion) {
        this.schemaVersion = schemaVersion;
        return this;
    }
}