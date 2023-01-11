package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeOrganizationConfigRuleStatusesRequest {
    public DescribeOrganizationConfigRuleStatusesQueryParams queryParams;
    public DescribeOrganizationConfigRuleStatusesRequest withQueryParams(DescribeOrganizationConfigRuleStatusesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeOrganizationConfigRuleStatusesHeaders headers;
    public DescribeOrganizationConfigRuleStatusesRequest withHeaders(DescribeOrganizationConfigRuleStatusesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeOrganizationConfigRuleStatusesRequest request;
    public DescribeOrganizationConfigRuleStatusesRequest withRequest(openapisdk.models.shared.DescribeOrganizationConfigRuleStatusesRequest request) {
        this.request = request;
        return this;
    }
}