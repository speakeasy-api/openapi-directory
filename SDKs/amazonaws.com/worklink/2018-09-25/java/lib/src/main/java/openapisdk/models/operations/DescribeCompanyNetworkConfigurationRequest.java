package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeCompanyNetworkConfigurationRequest {
    public DescribeCompanyNetworkConfigurationHeaders headers;
    public DescribeCompanyNetworkConfigurationRequest withHeaders(DescribeCompanyNetworkConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DescribeCompanyNetworkConfigurationRequestBody request;
    public DescribeCompanyNetworkConfigurationRequest withRequest(DescribeCompanyNetworkConfigurationRequestBody request) {
        this.request = request;
        return this;
    }
}