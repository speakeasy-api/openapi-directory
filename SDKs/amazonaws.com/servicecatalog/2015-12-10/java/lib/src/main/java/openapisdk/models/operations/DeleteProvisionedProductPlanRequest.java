package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteProvisionedProductPlanRequest {
    public DeleteProvisionedProductPlanHeaders headers;
    public DeleteProvisionedProductPlanRequest withHeaders(DeleteProvisionedProductPlanHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteProvisionedProductPlanInput request;
    public DeleteProvisionedProductPlanRequest withRequest(openapisdk.models.shared.DeleteProvisionedProductPlanInput request) {
        this.request = request;
        return this;
    }
}