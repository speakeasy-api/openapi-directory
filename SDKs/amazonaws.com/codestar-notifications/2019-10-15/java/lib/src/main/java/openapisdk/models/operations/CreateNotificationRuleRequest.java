package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateNotificationRuleRequest {
    public CreateNotificationRuleHeaders headers;
    public CreateNotificationRuleRequest withHeaders(CreateNotificationRuleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateNotificationRuleRequestBody request;
    public CreateNotificationRuleRequest withRequest(CreateNotificationRuleRequestBody request) {
        this.request = request;
        return this;
    }
}