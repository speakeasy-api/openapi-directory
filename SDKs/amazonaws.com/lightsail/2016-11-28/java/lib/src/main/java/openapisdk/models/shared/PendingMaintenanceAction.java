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
 * Describes a pending database maintenance action.
**/
public class PendingMaintenanceAction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action")
    public String action;
    public PendingMaintenanceAction withAction(String action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("currentApplyDate")
    public OffsetDateTime currentApplyDate;
    public PendingMaintenanceAction withCurrentApplyDate(OffsetDateTime currentApplyDate) {
        this.currentApplyDate = currentApplyDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public PendingMaintenanceAction withDescription(String description) {
        this.description = description;
        return this;
    }
}