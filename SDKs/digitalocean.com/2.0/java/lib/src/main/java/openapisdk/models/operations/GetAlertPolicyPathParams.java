package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAlertPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=alert_uuid")
    public String alertUuid;
    public GetAlertPolicyPathParams withAlertUuid(String alertUuid) {
        this.alertUuid = alertUuid;
        return this;
    }
}