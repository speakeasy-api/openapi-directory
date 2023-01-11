package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeNotificationsForBudgetRequest {
    public DescribeNotificationsForBudgetQueryParams queryParams;
    public DescribeNotificationsForBudgetRequest withQueryParams(DescribeNotificationsForBudgetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeNotificationsForBudgetHeaders headers;
    public DescribeNotificationsForBudgetRequest withHeaders(DescribeNotificationsForBudgetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeNotificationsForBudgetRequest request;
    public DescribeNotificationsForBudgetRequest withRequest(openapisdk.models.shared.DescribeNotificationsForBudgetRequest request) {
        this.request = request;
        return this;
    }
}