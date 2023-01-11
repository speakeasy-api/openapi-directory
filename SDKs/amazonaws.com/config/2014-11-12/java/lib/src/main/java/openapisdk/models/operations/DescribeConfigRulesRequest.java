package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeConfigRulesRequest {
    public DescribeConfigRulesQueryParams queryParams;
    public DescribeConfigRulesRequest withQueryParams(DescribeConfigRulesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeConfigRulesHeaders headers;
    public DescribeConfigRulesRequest withHeaders(DescribeConfigRulesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeConfigRulesRequest request;
    public DescribeConfigRulesRequest withRequest(openapisdk.models.shared.DescribeConfigRulesRequest request) {
        this.request = request;
        return this;
    }
}