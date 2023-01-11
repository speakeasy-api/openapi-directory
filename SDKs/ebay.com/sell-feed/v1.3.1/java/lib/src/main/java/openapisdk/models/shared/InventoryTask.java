package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class InventoryTask {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("completionDate")
    public String completionDate;
    public InventoryTask withCompletionDate(String completionDate) {
        this.completionDate = completionDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creationDate")
    public String creationDate;
    public InventoryTask withCreationDate(String creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detailHref")
    public String detailHref;
    public InventoryTask withDetailHref(String detailHref) {
        this.detailHref = detailHref;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("feedType")
    public String feedType;
    public InventoryTask withFeedType(String feedType) {
        this.feedType = feedType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filterCriteria")
    public InventoryFilterCriteria filterCriteria;
    public InventoryTask withFilterCriteria(InventoryFilterCriteria filterCriteria) {
        this.filterCriteria = filterCriteria;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventoryFileTemplate")
    public String inventoryFileTemplate;
    public InventoryTask withInventoryFileTemplate(String inventoryFileTemplate) {
        this.inventoryFileTemplate = inventoryFileTemplate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schemaVersion")
    public String schemaVersion;
    public InventoryTask withSchemaVersion(String schemaVersion) {
        this.schemaVersion = schemaVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public InventoryTask withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskId")
    public String taskId;
    public InventoryTask withTaskId(String taskId) {
        this.taskId = taskId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uploadSummary")
    public UploadSummary uploadSummary;
    public InventoryTask withUploadSummary(UploadSummary uploadSummary) {
        this.uploadSummary = uploadSummary;
        return this;
    }
}