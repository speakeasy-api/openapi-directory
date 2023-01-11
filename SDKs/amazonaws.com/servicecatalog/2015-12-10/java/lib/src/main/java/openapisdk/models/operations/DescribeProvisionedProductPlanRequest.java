package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeProvisionedProductPlanRequest {
    public DescribeProvisionedProductPlanHeaders headers;
    public DescribeProvisionedProductPlanRequest withHeaders(DescribeProvisionedProductPlanHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeProvisionedProductPlanInput request;
    public DescribeProvisionedProductPlanRequest withRequest(openapisdk.models.shared.DescribeProvisionedProductPlanInput request) {
        this.request = request;
        return this;
    }
}