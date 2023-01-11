package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteScheduledAuditPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=scheduledAuditName")
    public String scheduledAuditName;
    public DeleteScheduledAuditPathParams withScheduledAuditName(String scheduledAuditName) {
        this.scheduledAuditName = scheduledAuditName;
        return this;
    }
}