package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CompanyMonitorRegisterRequestBody {
    @SpeakeasyMetadata("form:name=callbackUrl")
    public String callbackUrl;
    public CompanyMonitorRegisterRequestBody withCallbackUrl(String callbackUrl) {
        this.callbackUrl = callbackUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=changeType")
    public String changeType;
    public CompanyMonitorRegisterRequestBody withChangeType(String changeType) {
        this.changeType = changeType;
        return this;
    }
}