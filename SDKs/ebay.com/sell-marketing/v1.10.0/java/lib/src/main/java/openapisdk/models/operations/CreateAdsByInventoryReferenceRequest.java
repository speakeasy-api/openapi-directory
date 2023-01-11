package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAdsByInventoryReferenceRequest {
    public CreateAdsByInventoryReferencePathParams pathParams;
    public CreateAdsByInventoryReferenceRequest withPathParams(CreateAdsByInventoryReferencePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateAdsByInventoryReferenceRequest request;
    public CreateAdsByInventoryReferenceRequest withRequest(openapisdk.models.shared.CreateAdsByInventoryReferenceRequest request) {
        this.request = request;
        return this;
    }
    public CreateAdsByInventoryReferenceSecurity security;
    public CreateAdsByInventoryReferenceRequest withSecurity(CreateAdsByInventoryReferenceSecurity security) {
        this.security = security;
        return this;
    }
}