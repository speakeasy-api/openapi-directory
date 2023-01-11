package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeProvisioningParametersRequest {
    public DescribeProvisioningParametersHeaders headers;
    public DescribeProvisioningParametersRequest withHeaders(DescribeProvisioningParametersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeProvisioningParametersInput request;
    public DescribeProvisioningParametersRequest withRequest(openapisdk.models.shared.DescribeProvisioningParametersInput request) {
        this.request = request;
        return this;
    }
}