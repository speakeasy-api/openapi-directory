package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAdsByInventoryReferenceRequest {
    public DeleteAdsByInventoryReferencePathParams pathParams;
    public DeleteAdsByInventoryReferenceRequest withPathParams(DeleteAdsByInventoryReferencePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteAdsByInventoryReferenceRequest request;
    public DeleteAdsByInventoryReferenceRequest withRequest(openapisdk.models.shared.DeleteAdsByInventoryReferenceRequest request) {
        this.request = request;
        return this;
    }
    public DeleteAdsByInventoryReferenceSecurity security;
    public DeleteAdsByInventoryReferenceRequest withSecurity(DeleteAdsByInventoryReferenceSecurity security) {
        this.security = security;
        return this;
    }
}