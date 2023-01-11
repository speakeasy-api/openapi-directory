package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeOrganizationConfigRulesRequest {
    public DescribeOrganizationConfigRulesQueryParams queryParams;
    public DescribeOrganizationConfigRulesRequest withQueryParams(DescribeOrganizationConfigRulesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeOrganizationConfigRulesHeaders headers;
    public DescribeOrganizationConfigRulesRequest withHeaders(DescribeOrganizationConfigRulesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeOrganizationConfigRulesRequest request;
    public DescribeOrganizationConfigRulesRequest withRequest(openapisdk.models.shared.DescribeOrganizationConfigRulesRequest request) {
        this.request = request;
        return this;
    }
}