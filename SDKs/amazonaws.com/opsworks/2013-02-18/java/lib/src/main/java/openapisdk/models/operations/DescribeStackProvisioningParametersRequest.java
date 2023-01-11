package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeStackProvisioningParametersRequest {
    public DescribeStackProvisioningParametersHeaders headers;
    public DescribeStackProvisioningParametersRequest withHeaders(DescribeStackProvisioningParametersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeStackProvisioningParametersRequest request;
    public DescribeStackProvisioningParametersRequest withRequest(openapisdk.models.shared.DescribeStackProvisioningParametersRequest request) {
        this.request = request;
        return this;
    }
}