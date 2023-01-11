package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * PendingMaintenanceAction
 * Describes a maintenance action pending for an DMS resource, including when and how it will be applied. This data type is a response element to the <code>DescribePendingMaintenanceActions</code> operation.
**/
public class PendingMaintenanceAction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Action")
    public String action;
    public PendingMaintenanceAction withAction(String action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("AutoAppliedAfterDate")
    public OffsetDateTime autoAppliedAfterDate;
    public PendingMaintenanceAction withAutoAppliedAfterDate(OffsetDateTime autoAppliedAfterDate) {
        this.autoAppliedAfterDate = autoAppliedAfterDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CurrentApplyDate")
    public OffsetDateTime currentApplyDate;
    public PendingMaintenanceAction withCurrentApplyDate(OffsetDateTime currentApplyDate) {
        this.currentApplyDate = currentApplyDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public PendingMaintenanceAction withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ForcedApplyDate")
    public OffsetDateTime forcedApplyDate;
    public PendingMaintenanceAction withForcedApplyDate(OffsetDateTime forcedApplyDate) {
        this.forcedApplyDate = forcedApplyDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OptInStatus")
    public String optInStatus;
    public PendingMaintenanceAction withOptInStatus(String optInStatus) {
        this.optInStatus = optInStatus;
        return this;
    }
}