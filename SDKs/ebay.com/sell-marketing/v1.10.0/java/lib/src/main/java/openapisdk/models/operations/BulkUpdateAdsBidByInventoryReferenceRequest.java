package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BulkUpdateAdsBidByInventoryReferenceRequest {
    public BulkUpdateAdsBidByInventoryReferencePathParams pathParams;
    public BulkUpdateAdsBidByInventoryReferenceRequest withPathParams(BulkUpdateAdsBidByInventoryReferencePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BulkCreateAdsByInventoryReferenceRequest request;
    public BulkUpdateAdsBidByInventoryReferenceRequest withRequest(openapisdk.models.shared.BulkCreateAdsByInventoryReferenceRequest request) {
        this.request = request;
        return this;
    }
    public BulkUpdateAdsBidByInventoryReferenceSecurity security;
    public BulkUpdateAdsBidByInventoryReferenceRequest withSecurity(BulkUpdateAdsBidByInventoryReferenceSecurity security) {
        this.security = security;
        return this;
    }
}