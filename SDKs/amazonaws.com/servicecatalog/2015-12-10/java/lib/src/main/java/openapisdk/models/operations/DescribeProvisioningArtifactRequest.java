package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeProvisioningArtifactRequest {
    public DescribeProvisioningArtifactHeaders headers;
    public DescribeProvisioningArtifactRequest withHeaders(DescribeProvisioningArtifactHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeProvisioningArtifactInput request;
    public DescribeProvisioningArtifactRequest withRequest(openapisdk.models.shared.DescribeProvisioningArtifactInput request) {
        this.request = request;
        return this;
    }
}