package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OrderTask
 * The type that defines the fields for the getOrderTask response.
**/
public class OrderTask {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("completionDate")
    public String completionDate;
    public OrderTask withCompletionDate(String completionDate) {
        this.completionDate = completionDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creationDate")
    public String creationDate;
    public OrderTask withCreationDate(String creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detailHref")
    public String detailHref;
    public OrderTask withDetailHref(String detailHref) {
        this.detailHref = detailHref;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("feedType")
    public String feedType;
    public OrderTask withFeedType(String feedType) {
        this.feedType = feedType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filterCriteria")
    public OrderFilterCriteria filterCriteria;
    public OrderTask withFilterCriteria(OrderFilterCriteria filterCriteria) {
        this.filterCriteria = filterCriteria;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schemaVersion")
    public String schemaVersion;
    public OrderTask withSchemaVersion(String schemaVersion) {
        this.schemaVersion = schemaVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public OrderTask withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskId")
    public String taskId;
    public OrderTask withTaskId(String taskId) {
        this.taskId = taskId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uploadSummary")
    public UploadSummary uploadSummary;
    public OrderTask withUploadSummary(UploadSummary uploadSummary) {
        this.uploadSummary = uploadSummary;
        return this;
    }
}