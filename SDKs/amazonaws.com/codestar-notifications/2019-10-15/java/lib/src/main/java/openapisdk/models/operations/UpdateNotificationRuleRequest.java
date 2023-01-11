package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNotificationRuleRequest {
    public UpdateNotificationRuleHeaders headers;
    public UpdateNotificationRuleRequest withHeaders(UpdateNotificationRuleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNotificationRuleRequestBody request;
    public UpdateNotificationRuleRequest withRequest(UpdateNotificationRuleRequestBody request) {
        this.request = request;
        return this;
    }
}