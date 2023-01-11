package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BulkCreateAdsByListingIdRequest {
    public BulkCreateAdsByListingIdPathParams pathParams;
    public BulkCreateAdsByListingIdRequest withPathParams(BulkCreateAdsByListingIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BulkCreateAdRequest request;
    public BulkCreateAdsByListingIdRequest withRequest(openapisdk.models.shared.BulkCreateAdRequest request) {
        this.request = request;
        return this;
    }
    public BulkCreateAdsByListingIdSecurity security;
    public BulkCreateAdsByListingIdRequest withSecurity(BulkCreateAdsByListingIdSecurity security) {
        this.security = security;
        return this;
    }
}