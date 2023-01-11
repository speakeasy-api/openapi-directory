package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateInventoryTaskRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("feedType")
    public String feedType;
    public CreateInventoryTaskRequest withFeedType(String feedType) {
        this.feedType = feedType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filterCriteria")
    public InventoryFilterCriteria filterCriteria;
    public CreateInventoryTaskRequest withFilterCriteria(InventoryFilterCriteria filterCriteria) {
        this.filterCriteria = filterCriteria;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventoryFileTemplate")
    public String inventoryFileTemplate;
    public CreateInventoryTaskRequest withInventoryFileTemplate(String inventoryFileTemplate) {
        this.inventoryFileTemplate = inventoryFileTemplate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schemaVersion")
    public String schemaVersion;
    public CreateInventoryTaskRequest withSchemaVersion(String schemaVersion) {
        this.schemaVersion = schemaVersion;
        return this;
    }
}