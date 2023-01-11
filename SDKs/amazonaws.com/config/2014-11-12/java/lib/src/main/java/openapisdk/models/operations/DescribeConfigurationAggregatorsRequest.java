package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeConfigurationAggregatorsRequest {
    public DescribeConfigurationAggregatorsQueryParams queryParams;
    public DescribeConfigurationAggregatorsRequest withQueryParams(DescribeConfigurationAggregatorsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeConfigurationAggregatorsHeaders headers;
    public DescribeConfigurationAggregatorsRequest withHeaders(DescribeConfigurationAggregatorsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeConfigurationAggregatorsRequest request;
    public DescribeConfigurationAggregatorsRequest withRequest(openapisdk.models.shared.DescribeConfigurationAggregatorsRequest request) {
        this.request = request;
        return this;
    }
}