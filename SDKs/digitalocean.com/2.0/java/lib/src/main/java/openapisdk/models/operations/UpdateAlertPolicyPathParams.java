package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAlertPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=alert_uuid")
    public String alertUuid;
    public UpdateAlertPolicyPathParams withAlertUuid(String alertUuid) {
        this.alertUuid = alertUuid;
        return this;
    }
}