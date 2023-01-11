package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CompanyNotificationRegisterRequestBody {
    @SpeakeasyMetadata("form:name=callbackUrl")
    public String callbackUrl;
    public CompanyNotificationRegisterRequestBody withCallbackUrl(String callbackUrl) {
        this.callbackUrl = callbackUrl;
        return this;
    }
}