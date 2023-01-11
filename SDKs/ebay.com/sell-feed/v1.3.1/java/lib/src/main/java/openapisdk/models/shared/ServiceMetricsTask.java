package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ServiceMetricsTask {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("completionDate")
    public String completionDate;
    public ServiceMetricsTask withCompletionDate(String completionDate) {
        this.completionDate = completionDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creationDate")
    public String creationDate;
    public ServiceMetricsTask withCreationDate(String creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detailHref")
    public String detailHref;
    public ServiceMetricsTask withDetailHref(String detailHref) {
        this.detailHref = detailHref;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("feedType")
    public String feedType;
    public ServiceMetricsTask withFeedType(String feedType) {
        this.feedType = feedType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filterCriteria")
    public CustomerServiceMetricsFilterCriteria filterCriteria;
    public ServiceMetricsTask withFilterCriteria(CustomerServiceMetricsFilterCriteria filterCriteria) {
        this.filterCriteria = filterCriteria;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schemaVersion")
    public String schemaVersion;
    public ServiceMetricsTask withSchemaVersion(String schemaVersion) {
        this.schemaVersion = schemaVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public ServiceMetricsTask withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskId")
    public String taskId;
    public ServiceMetricsTask withTaskId(String taskId) {
        this.taskId = taskId;
        return this;
    }
}