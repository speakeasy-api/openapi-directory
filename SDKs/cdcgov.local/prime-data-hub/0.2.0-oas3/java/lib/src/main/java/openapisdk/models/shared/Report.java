package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Report {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationCount")
    public Long destinationCount;
    public Report withDestinationCount(Long destinationCount) {
        this.destinationCount = destinationCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinations")
    public Destination[] destinations;
    public Report withDestinations(Destination[] destinations) {
        this.destinations = destinations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorCount")
    public Long errorCount;
    public Report withErrorCount(Long errorCount) {
        this.errorCount = errorCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public Detail[] errors;
    public Report withErrors(Detail[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public Report withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportItemCount")
    public Long reportItemCount;
    public Report withReportItemCount(Long reportItemCount) {
        this.reportItemCount = reportItemCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("routing")
    public ItemRouting[] routing;
    public Report withRouting(ItemRouting[] routing) {
        this.routing = routing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timestamp")
    public String timestamp;
    public Report withTimestamp(String timestamp) {
        this.timestamp = timestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topic")
    public String topic;
    public Report withTopic(String topic) {
        this.topic = topic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warningCount")
    public Long warningCount;
    public Report withWarningCount(Long warningCount) {
        this.warningCount = warningCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warnings")
    public Detail[] warnings;
    public Report withWarnings(Detail[] warnings) {
        this.warnings = warnings;
        return this;
    }
}