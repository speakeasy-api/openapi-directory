package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeScheduledAuditPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=scheduledAuditName")
    public String scheduledAuditName;
    public DescribeScheduledAuditPathParams withScheduledAuditName(String scheduledAuditName) {
        this.scheduledAuditName = scheduledAuditName;
        return this;
    }
}