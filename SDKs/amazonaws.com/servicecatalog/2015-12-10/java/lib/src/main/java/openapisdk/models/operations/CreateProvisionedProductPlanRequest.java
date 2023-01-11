package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateProvisionedProductPlanRequest {
    public CreateProvisionedProductPlanHeaders headers;
    public CreateProvisionedProductPlanRequest withHeaders(CreateProvisionedProductPlanHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateProvisionedProductPlanInput request;
    public CreateProvisionedProductPlanRequest withRequest(openapisdk.models.shared.CreateProvisionedProductPlanInput request) {
        this.request = request;
        return this;
    }
}