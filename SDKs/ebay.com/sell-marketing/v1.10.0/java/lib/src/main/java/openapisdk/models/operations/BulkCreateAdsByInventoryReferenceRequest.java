package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BulkCreateAdsByInventoryReferenceRequest {
    public BulkCreateAdsByInventoryReferencePathParams pathParams;
    public BulkCreateAdsByInventoryReferenceRequest withPathParams(BulkCreateAdsByInventoryReferencePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BulkCreateAdsByInventoryReferenceRequest request;
    public BulkCreateAdsByInventoryReferenceRequest withRequest(openapisdk.models.shared.BulkCreateAdsByInventoryReferenceRequest request) {
        this.request = request;
        return this;
    }
    public BulkCreateAdsByInventoryReferenceSecurity security;
    public BulkCreateAdsByInventoryReferenceRequest withSecurity(BulkCreateAdsByInventoryReferenceSecurity security) {
        this.security = security;
        return this;
    }
}