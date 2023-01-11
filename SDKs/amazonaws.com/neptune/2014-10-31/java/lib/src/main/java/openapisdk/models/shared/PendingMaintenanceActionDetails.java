package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * PendingMaintenanceActionDetails
 * Provides information about a pending maintenance action for a resource.
**/
public class PendingMaintenanceActionDetails {
    public String action;
    public PendingMaintenanceActionDetails withAction(String action) {
        this.action = action;
        return this;
    }
    public OffsetDateTime autoAppliedAfterDate;
    public PendingMaintenanceActionDetails withAutoAppliedAfterDate(OffsetDateTime autoAppliedAfterDate) {
        this.autoAppliedAfterDate = autoAppliedAfterDate;
        return this;
    }
    public OffsetDateTime currentApplyDate;
    public PendingMaintenanceActionDetails withCurrentApplyDate(OffsetDateTime currentApplyDate) {
        this.currentApplyDate = currentApplyDate;
        return this;
    }
    public String description;
    public PendingMaintenanceActionDetails withDescription(String description) {
        this.description = description;
        return this;
    }
    public OffsetDateTime forcedApplyDate;
    public PendingMaintenanceActionDetails withForcedApplyDate(OffsetDateTime forcedApplyDate) {
        this.forcedApplyDate = forcedApplyDate;
        return this;
    }
    public String optInStatus;
    public PendingMaintenanceActionDetails withOptInStatus(String optInStatus) {
        this.optInStatus = optInStatus;
        return this;
    }
}