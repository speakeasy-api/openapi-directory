package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BulkUpdateAdsBidByListingIdRequest {
    public BulkUpdateAdsBidByListingIdPathParams pathParams;
    public BulkUpdateAdsBidByListingIdRequest withPathParams(BulkUpdateAdsBidByListingIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BulkCreateAdRequest request;
    public BulkUpdateAdsBidByListingIdRequest withRequest(openapisdk.models.shared.BulkCreateAdRequest request) {
        this.request = request;
        return this;
    }
    public BulkUpdateAdsBidByListingIdSecurity security;
    public BulkUpdateAdsBidByListingIdRequest withSecurity(BulkUpdateAdsBidByListingIdSecurity security) {
        this.security = security;
        return this;
    }
}