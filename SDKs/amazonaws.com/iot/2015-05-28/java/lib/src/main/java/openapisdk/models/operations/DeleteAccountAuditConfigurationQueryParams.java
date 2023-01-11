package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAccountAuditConfigurationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=deleteScheduledAudits")
    public Boolean deleteScheduledAudits;
    public DeleteAccountAuditConfigurationQueryParams withDeleteScheduledAudits(Boolean deleteScheduledAudits) {
        this.deleteScheduledAudits = deleteScheduledAudits;
        return this;
    }
}