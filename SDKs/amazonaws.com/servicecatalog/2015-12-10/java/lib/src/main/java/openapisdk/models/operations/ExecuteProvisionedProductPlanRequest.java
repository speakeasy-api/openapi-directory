package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExecuteProvisionedProductPlanRequest {
    public ExecuteProvisionedProductPlanHeaders headers;
    public ExecuteProvisionedProductPlanRequest withHeaders(ExecuteProvisionedProductPlanHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ExecuteProvisionedProductPlanInput request;
    public ExecuteProvisionedProductPlanRequest withRequest(openapisdk.models.shared.ExecuteProvisionedProductPlanInput request) {
        this.request = request;
        return this;
    }
}