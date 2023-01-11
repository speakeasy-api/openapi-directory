package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateScheduledAuditPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=scheduledAuditName")
    public String scheduledAuditName;
    public CreateScheduledAuditPathParams withScheduledAuditName(String scheduledAuditName) {
        this.scheduledAuditName = scheduledAuditName;
        return this;
    }
}