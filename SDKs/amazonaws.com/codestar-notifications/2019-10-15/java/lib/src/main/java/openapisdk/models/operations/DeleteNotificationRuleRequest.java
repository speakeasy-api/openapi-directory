package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteNotificationRuleRequest {
    public DeleteNotificationRuleHeaders headers;
    public DeleteNotificationRuleRequest withHeaders(DeleteNotificationRuleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DeleteNotificationRuleRequestBody request;
    public DeleteNotificationRuleRequest withRequest(DeleteNotificationRuleRequestBody request) {
        this.request = request;
        return this;
    }
}