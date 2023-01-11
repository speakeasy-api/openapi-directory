package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeOrganizationRequest {
    public DescribeOrganizationHeaders headers;
    public DescribeOrganizationRequest withHeaders(DescribeOrganizationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeOrganizationRequest request;
    public DescribeOrganizationRequest withRequest(openapisdk.models.shared.DescribeOrganizationRequest request) {
        this.request = request;
        return this;
    }
}