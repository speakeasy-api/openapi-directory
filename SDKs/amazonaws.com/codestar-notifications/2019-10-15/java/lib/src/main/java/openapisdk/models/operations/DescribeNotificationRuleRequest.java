package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeNotificationRuleRequest {
    public DescribeNotificationRuleHeaders headers;
    public DescribeNotificationRuleRequest withHeaders(DescribeNotificationRuleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DescribeNotificationRuleRequestBody request;
    public DescribeNotificationRuleRequest withRequest(DescribeNotificationRuleRequestBody request) {
        this.request = request;
        return this;
    }
}