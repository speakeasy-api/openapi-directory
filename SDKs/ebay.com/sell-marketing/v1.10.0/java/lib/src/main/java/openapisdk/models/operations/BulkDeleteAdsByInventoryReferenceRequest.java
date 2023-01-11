package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BulkDeleteAdsByInventoryReferenceRequest {
    public BulkDeleteAdsByInventoryReferencePathParams pathParams;
    public BulkDeleteAdsByInventoryReferenceRequest withPathParams(BulkDeleteAdsByInventoryReferencePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BulkDeleteAdsByInventoryReferenceRequest request;
    public BulkDeleteAdsByInventoryReferenceRequest withRequest(openapisdk.models.shared.BulkDeleteAdsByInventoryReferenceRequest request) {
        this.request = request;
        return this;
    }
    public BulkDeleteAdsByInventoryReferenceSecurity security;
    public BulkDeleteAdsByInventoryReferenceRequest withSecurity(BulkDeleteAdsByInventoryReferenceSecurity security) {
        this.security = security;
        return this;
    }
}