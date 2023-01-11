package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeRulesPackagesRequest {
    public DescribeRulesPackagesHeaders headers;
    public DescribeRulesPackagesRequest withHeaders(DescribeRulesPackagesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeRulesPackagesRequest request;
    public DescribeRulesPackagesRequest withRequest(openapisdk.models.shared.DescribeRulesPackagesRequest request) {
        this.request = request;
        return this;
    }
}