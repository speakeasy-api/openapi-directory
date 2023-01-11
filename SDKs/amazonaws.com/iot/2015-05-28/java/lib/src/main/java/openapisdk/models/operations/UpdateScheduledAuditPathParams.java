package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateScheduledAuditPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=scheduledAuditName")
    public String scheduledAuditName;
    public UpdateScheduledAuditPathParams withScheduledAuditName(String scheduledAuditName) {
        this.scheduledAuditName = scheduledAuditName;
        return this;
    }
}