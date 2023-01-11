package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAlertPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=alert_uuid")
    public String alertUuid;
    public DeleteAlertPolicyPathParams withAlertUuid(String alertUuid) {
        this.alertUuid = alertUuid;
        return this;
    }
}