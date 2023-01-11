package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeInstanceAccessControlAttributeConfigurationRequest {
    public DescribeInstanceAccessControlAttributeConfigurationHeaders headers;
    public DescribeInstanceAccessControlAttributeConfigurationRequest withHeaders(DescribeInstanceAccessControlAttributeConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeInstanceAccessControlAttributeConfigurationRequest request;
    public DescribeInstanceAccessControlAttributeConfigurationRequest withRequest(openapisdk.models.shared.DescribeInstanceAccessControlAttributeConfigurationRequest request) {
        this.request = request;
        return this;
    }
}